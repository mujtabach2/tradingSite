import snoowrap from 'snoowrap';
import Sentiment from 'sentiment';

// Replace these with your own Reddit API credentials
const redditConfig = {
  userAgent: 'Your App Name',
  clientId: 'Your Client ID',
  clientSecret: 'Your Client Secret',
  username: 'Your Reddit Username',
  password: 'Your Reddit Password',
};

const reddit = new snoowrap(redditConfig);
const sentiment = new Sentiment();

// Function to get comments from a subreddit
const getSubredditComments = async (subreddit) => {
  const comments = await reddit.getSubreddit(subreddit).getTop({ time: 'day', limit: 100 });

  return comments.map((comment) => comment.body);
};

// Function to get comments from overall Reddit
const getOverallRedditComments = async () => {
  const comments = await reddit.getPopular({ time: 'day', limit: 100 });

  return comments.map((post) => post.title + ' ' + post.selftext);
};

// Function to analyze sentiment of comments
const analyzeSentiment = (comments) => {
  let overallScore = 0;

  comments.forEach((comment) => {
    const analysis = sentiment.analyze(comment);
    overallScore += analysis.score;

    console.log(`Comment: ${comment}`);
    console.log(`Sentiment Score: ${analysis.score}`);
    console.log('---');
  });

  const averageScore = overallScore / comments.length;
  return averageScore;
};

export { getSubredditComments, getOverallRedditComments, analyzeSentiment};
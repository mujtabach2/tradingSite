import Twit from 'twit';
import Sentiment from 'sentiment';

// Replace these with your own Twitter API credentials
const twitterConfig = {
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
};

const stockSymbol = 'AAPL'; // Replace with the desired stock symbol

const T = new Twit(twitterConfig);
const sentiment = new Sentiment();

// Function to get tweets containing the stock symbol
const getTweets = () => {
  return new Promise((resolve, reject) => {
    const params = {
      q: `${stockSymbol} -filter:retweets`,
      count: 100,
      lang: 'en',
    };

    T.get('search/tweets', params, (err, data, response) => {
      if (err) {
        reject(`Error fetching tweets: ${err}`);
        return;
      }

      resolve(analyzeSentiment(data.statuses));

      
    });
  });
};

// Function to analyze sentiment of tweets
const analyzeSentiment = (tweets) => {
  let overallScore = 0;

  tweets.forEach((tweet) => {
    const tweetText = tweet.text;
    const analysis = sentiment.analyze(tweetText);
    overallScore += analysis.score;

    console.log(`Tweet: ${tweetText}`);
    console.log(`Sentiment Score: ${analysis.score}`);
    console.log('---');
  });

  const averageScore = overallScore / tweets.length;
  return `Overall Sentiment Score for ${stockSymbol}: ${averageScore}`;
};

export { getTweets, analyzeSentiment };
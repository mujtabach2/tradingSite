/**
 *
 * @param {*} annualizedReturn
 * @param {*} sharpeRatio
 * @param {*} maxDrawdown
 * @param {*} calmarRatio
 * @param {*} twitterSentiment
 * @param {*} redditSentiment
 * @param {*} newsSentiment
 * @return {string} - The decision to buy, hold, or sell the stock
 */
function makeDecision(
    annualizedReturn,
    sharpeRatio,
    maxDrawdown,
    calmarRatio,
    twitterSentiment,
    redditSentiment,
    newsSentiment,
) {
  const returnThreshold = 0.05; // Annualized return threshold
  const sharpeThreshold = 0.5; // Sharpe ratio threshold
  const maxDrawdownThreshold = -0.1; // Max drawdown threshold

  // Combine sentiment scores (you may want to customize how you combine them)
  const combinedSentiment =
    (twitterSentiment + redditSentiment + newsSentiment) / 2;

  // Make buy, hold, sell decisions based on thresholds
  const sentimentWeight = 0.5;
  let decision;
  if (annualizedReturn > returnThreshold) {
    if (sharpeRatio > sharpeThreshold) {
      if (maxDrawdown > maxDrawdownThreshold) {
        if (calmarRatio > 0.5) {
          decision = "Buy";
        } else if (combinedSentiment * sentimentWeight > 0) {
          decision = "Buy";
        } else {
          decision = "Sell";
        }
      } else {
        decision = "Sell";
      }
    } else {
      decision = "Sell";
    }
  } else if (combinedSentiment * sentimentWeight > 0) {
    decision = "Hold";
  } else {
    decision = "Sell";
  }

  return decision;
}

module.exports = makeDecision;

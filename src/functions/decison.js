export default function makeDecision(annualizedReturn, sharpeRatio, maxDrawdown, twitterSentiment, redditSentiment) {
    // Define decision thresholds (you may need to adjust these based on your specific criteria)
    const returnThreshold = 0.05;  // Annualized return threshold
    const sharpeThreshold = 0.5;   // Sharpe ratio threshold
    const maxDrawdownThreshold = -0.1;  // Max drawdown threshold

    // Combine sentiment scores (you may want to customize how you combine them)
    const combinedSentiment = (twitterSentiment + redditSentiment) / 2;

    // Make buy, hold, sell decisions based on thresholds
    const sentimentWeight = 0.5;
    let decision;
    if (annualizedReturn > returnThreshold) {
        if (sharpeRatio > sharpeThreshold) {
            if (maxDrawdown > maxDrawdownThreshold) {
                if (combinedSentiment * sentimentWeight > 0) {
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

const functions = require("firebase-functions");
const axios = require("axios");
const processAnalysisResults = require("./processAnalysis");

exports.analyzeStock = functions.https.onRequest(async (req, res) => {
  try {
    console.log("func called");

    // Make a GET request to the Python backend service
    const response = await axios.get(
        "https://tradingsitebackend.onrender.com/get_results",
    );

    // Trigger another function with the analysis results
    const result = await processAnalysisResults(response.data);
    console.log("Result of the analysis:", result);

    // Send the response back to the client
    res.send(result);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

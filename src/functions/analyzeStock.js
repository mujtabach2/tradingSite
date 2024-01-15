// analyzeStock.js

const axios = require('axios');
const { processAnalysisResults } = require('./processAnalysisResults');

async function analyzeStock(req, res) {
    try {
        const pythonBackendUrl = 'https://your-python-backend-url/analyzeStock';
        const inputParameters = req.body; 
  
 
        // Make a POST request to the Python backend service
        const response = await axios.post(pythonBackendUrl, inputParameters, {
            responseType: 'arraybuffer',
        });

        // Trigger another function with the analysis results
        const result = await processAnalysisResults(response.data);



        // Send the response back to the client
        res.send(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { analyzeStock };

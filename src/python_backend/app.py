# app.py
from flask import Flask, request, Response
from analysis_script import perform_analysis

app = Flask(__name__)

@app.route('/analyzeStock', methods=['POST'])
def analyze_stock():
    try:
        data = request.get_json()

        # Call the analysis function
        csv_data = perform_analysis(data)

        # Set headers for CSV response
        response = Response(csv_data, content_type='text/csv')
        response.headers['Content-Disposition'] = 'attachment; filename=analysis_results.csv'

        return response

    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

import React, { useState } from "react";
import axios from "axios";

const PaperTrade = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [action, setAction] = useState("buy");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://paper-api.alpaca.markets/v2/orders`,
        {
          symbol,
          qty: quantity,
          side: action,
          type: "market",
          time_in_force: "day",
        },
        {
          headers: {
            "APCA-API-KEY-ID": YOUR_API_KEY_ID,
            "APCA-API-SECRET-KEY": YOUR_API_SECRET_KEY,
          },
        },
      );
      setMessage(
        `Successfully ${action === "buy" ? "bought" : "sold"} ${quantity} shares of ${symbol}`,
      );
    } catch (error) {
      setMessage(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Paper Trade</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="symbol" className="block text-gray-700">
            Symbol:
          </label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Enter symbol"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            placeholder="Enter quantity"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="action" className="block text-gray-700">
            Action:
          </label>
          <select
            id="action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default PaperTrade;

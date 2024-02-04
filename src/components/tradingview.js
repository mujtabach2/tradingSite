import React, { useEffect } from "react";

export const TradingViewChart = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "98%",
        height: "98%",
        symbol: symbol || "AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark", // Set theme to dark
        style: "8",
        locale: "en",
        toolbar_bg: "#2E2E2E", // Dark toolbar background color
        enable_publishing: false,
        hide_top_toolbar: true,
        allow_symbol_change: true,
        backgroundColor: "rgba(17, 24, 39, 1)",
        gridColor: "rgba(101, 101, 101, 0.06)",
        container_id: "tradingview-widget",
        studies: [
          "STD;Bollinger_Bands",
          "STD;Divergence%1Indicator",
          "STD;Smoothed%1Moving%1Average",
        ],
      });
    };

    document.body.appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.body.removeChild(script);
    };
  }, [symbol]);

  return (
    <div id="tradingview-widget" className="tradingview-widget-container"></div>
  );
};

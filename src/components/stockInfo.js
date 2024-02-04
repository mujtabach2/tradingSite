import React, { useEffect } from "react";

export const TradingViewInfo = ({ stock }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;

    script.text = JSON.stringify({
      isTransparent: true,
      displayMode: "regular",
      height: "200%",
      colorTheme: "dark",
      symbol: "NASDAQ:AAPL",
      locale: "en",
    });

    const container = document.getElementById("tradingview-widget-container");
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, [stock]);

  return (
    <div
      id="tradingview-widget-container"
      className="tradingview-widget-container"
    ></div>
  );
};

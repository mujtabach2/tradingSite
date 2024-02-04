import React, { useEffect } from "react";
import { TradingViewChart } from "../components/tradingview";

export const TradingViewWidget = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.innerHTML = JSON.stringify({
      symbol: `NASDAQ:${symbol}`,
      autosize: true,
      height: "100%",
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    });

    const container = document.querySelector(
      `.tradingview-widget-container__widget-${symbol}`,
    );
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, [symbol]);

  return (
    <div className={`tradingview-widget-container__widget-${symbol}`}>
      {/* Use a unique class for each widget container */}
    </div>
  );
};

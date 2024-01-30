import logo from "./logo.svg";
import "./App.css";
import { NewsCarousel } from "./components/newsCarsoul";
import React from "react";
import ReactDOM from "react-dom";
import {getNewsSentiment, newsArticles, newsSentimentScores } from "./functions/news";

function App() {

  const [newsStock, setNewsStock] = useState();

  setNewsStock(bestStock)

  setNewsStock(stock);

  return (
    <div className="App">
      <NewsCarousel newsSentimentScores={newsSentimentScores} newsArticles={newsArticles} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

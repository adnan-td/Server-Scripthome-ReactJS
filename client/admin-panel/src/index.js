import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ScreenWidth } from "./contexts/screenwidth/screenwidth.context";
import { DataValue } from "./contexts/data/data.context";
import { SearchField } from "./contexts/searchfield/search.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScreenWidth>
      <DataValue>
        <SearchField>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchField>
      </DataValue>
    </ScreenWidth>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

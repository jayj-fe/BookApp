import React from "react"
import * as ReactDOM from 'react-dom/client';
import App from "./App.js"
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
    <HashRouter>
        <App />
    </HashRouter>
);
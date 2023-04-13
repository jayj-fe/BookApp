import React from "react"
import * as ReactDOM from 'react-dom/client';
import App from "./App.js"
import "./asset/scss/App.scss"
import { BrowserRouter } from "react-router-dom";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import './styles/index.less'

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );add 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const App_1 = require("./App");
const slices_1 = require("./slices");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        table: slices_1.tableSlice.reducer,
    },
});
window.bodyOnLoad = function () {
    const domNode = document.getElementById("root");
    const root = (0, client_1.createRoot)(domNode);
    root.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(App_1.App, null)));
};

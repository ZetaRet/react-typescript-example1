"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
exports.LoginWrapper = LoginWrapper;
exports.DataTableWrapper = DataTableWrapper;
exports.AppMain = AppMain;
exports.App = App;
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const LoginForm_1 = require("./LoginForm");
const react_redux_1 = require("react-redux");
const DataTable_1 = require("./DataTable");
function Home() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Home")));
}
function LoginWrapper() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(LoginForm_1.LoginForm, null)));
}
function DataTableRequire() {
    return (react_1.default.createElement("div", { className: "data-table-require" },
        react_1.default.createElement("h2", null, "Data Table require Login")));
}
function DataTableWrapper() {
    const username = (0, react_redux_1.useSelector)((state) => state.table.username);
    return react_1.default.createElement("div", null, username ? react_1.default.createElement(DataTable_1.DataTable, null) : DataTableRequire());
}
function AppMain() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Data Table Fetch"),
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/login/" }, "Login")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/table/0" }, "Data Table")))),
            react_1.default.createElement(react_router_1.Routes, null,
                react_1.default.createElement(react_router_1.Route, { path: "/", element: react_1.default.createElement(Home, null) }),
                react_1.default.createElement(react_router_1.Route, { path: "/login/", element: react_1.default.createElement(LoginWrapper, null) }),
                react_1.default.createElement(react_router_1.Route, { path: "/table/:page", element: react_1.default.createElement(DataTableWrapper, null) })))));
}
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AppMain, null)));
}

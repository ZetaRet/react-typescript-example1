"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = DataTable;
const react_1 = __importStar(require("react"));
const helpers_1 = require("./helpers");
const slices_1 = require("./slices");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
function DataTable() {
    const { page } = (0, react_router_dom_1.useParams)();
    const tableDataSlice = (0, react_redux_1.useSelector)((state) => state.table.dataSlice);
    const totalPages = (0, react_redux_1.useSelector)((state) => state.table.totalPages);
    const loaded = (0, react_redux_1.useSelector)((state) => state.table.loaded);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useMemo)(async () => {
        if (!loaded && (!totalPages || currentPage < totalPages)) {
            dispatch(slices_1.tableActions.setDataTable(await (0, helpers_1.fetchApi)("https://swapi.py4e.com/api/people/?format=json&page=" + (currentPage + 1), "GET")));
            setCurrentPage(currentPage + 1);
            setLoading(true);
        }
        else {
            dispatch(slices_1.tableActions.setLoaded());
            setLoading(false);
        }
    }, [currentPage]);
    (0, react_1.useMemo)(() => {
        dispatch(slices_1.tableActions.setPage({ page }));
    }, [page]);
    const pagenum = parseInt(page);
    const tableRows = tableDataSlice.map((e, i) => (react_1.default.createElement("tr", { key: i, className: "tableitem" },
        react_1.default.createElement("td", null, e.name),
        react_1.default.createElement("td", null, e.mass),
        react_1.default.createElement("td", null, e.height),
        react_1.default.createElement("td", null, e.hair_color),
        react_1.default.createElement("td", null, e.skin_color))));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Data Table"),
        react_1.default.createElement("div", { className: "tablediv" },
            react_1.default.createElement("div", null, loading ? "Loading" : ""),
            react_1.default.createElement("table", null,
                react_1.default.createElement("tr", { className: "tablehead" },
                    react_1.default.createElement("th", null, "Name"),
                    react_1.default.createElement("th", null, "Mass"),
                    react_1.default.createElement("th", null, "Height"),
                    react_1.default.createElement("th", null, "Hair Color"),
                    react_1.default.createElement("th", null, "Skin Color")),
                tableRows)),
        react_1.default.createElement("div", { className: "paginator" },
            pagenum > 0 && (react_1.default.createElement(react_router_dom_1.Link, { to: "/table/" + (pagenum - 1), className: "prev-btn" }, "Previous")),
            pagenum + 1 < totalPages && (react_1.default.createElement(react_router_dom_1.Link, { to: "/table/" + (pagenum + 1), className: "next-btn" }, "Next")))));
}

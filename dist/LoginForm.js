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
exports.LoginForm = LoginForm;
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const slices_1 = require("./slices");
const react_redux_1 = require("react-redux");
function LoginForm() {
    const formRef = (0, react_1.useRef)(null);
    const navigate = (0, react_router_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    async function onSubmit(e) {
        e.preventDefault();
        dispatch(slices_1.tableActions.setLogin({ username: formRef.current.username }));
        navigate("/table/0");
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Login Form"),
        react_1.default.createElement("div", { className: "login" },
            react_1.default.createElement("form", { ref: formRef, className: "form-login", onSubmit: onSubmit },
                react_1.default.createElement("input", { type: "text", name: "username", placeholder: "Username", minLength: 4, maxLength: 30, required: true }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "password", name: "password", placeholder: "Password", minLength: 4, maxLength: 30, required: true }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", null, "Submit")))));
}

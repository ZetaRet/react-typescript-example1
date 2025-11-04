import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { App } from "./App";
import { tableSlice } from "./slices";

const store = configureStore({
	reducer: {
		table: tableSlice.reducer,
	},
});

(window as any).bodyOnLoad = function () {
	const domNode = document.getElementById("root");
	const root = createRoot(domNode as any);

	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
};

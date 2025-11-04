import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
	name: "table",
	initialState: { dataTable: [], dataSlice: [], page: 0, totalPages: 0, limit: 10, loaded: false, username: null },
	reducers: {
		setDataTable: (state, action) => {
			let first = state.dataTable.length === 0;
			if (!state.loaded) state.dataTable = state.dataTable.concat(action.payload.results);
			if (first) {
				state.dataSlice = state.dataTable.slice(0, state.limit);
				state.totalPages = Math.ceil(action.payload.count / state.limit);
			}
		},
		setLogin: (state, action) => {
			state.username = action.payload.username;
		},
		nextPage: (state, action) => {
			if (state.page < state.totalPages) state.page++;
			let psl = state.page * state.limit;
			state.dataSlice = state.dataTable.slice(psl, psl + state.limit);
		},
		previousPage: (state, action) => {
			if (state.page > 0) state.page--;
			let psl = state.page * state.limit;
			state.dataSlice = state.dataTable.slice(psl, psl + state.limit);
		},
		setPage: (state, action) => {
			state.page = action.payload.page;
			let psl = state.page * state.limit;
			state.dataSlice = state.dataTable.slice(psl, psl + state.limit);
		},
		setLoaded: (state) => {
			state.loaded = true;
		},
	},
});

export const tableActions = tableSlice.actions;

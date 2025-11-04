import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";
import { tableActions } from "./slices";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export function DataTable() {
	const { page } = useParams();
	const tableDataSlice = useSelector((state: any) => state.table.dataSlice);
	const totalPages = useSelector((state: any) => state.table.totalPages);
	const loaded = useSelector((state: any) => state.table.loaded);
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useMemo(async () => {
		if (!loaded && (!totalPages || currentPage < totalPages)) {
			dispatch(
				tableActions.setDataTable(
					await fetchApi("https://swapi.py4e.com/api/people/?format=json&page=" + (currentPage + 1), "GET")
				)
			);
			setCurrentPage(currentPage + 1);
			setLoading(true);
		} else {
			dispatch(tableActions.setLoaded());
			setLoading(false);
		}
	}, [currentPage]);
	useMemo(() => {
		dispatch(tableActions.setPage({ page }));
	}, [page]);

	const pagenum = parseInt(page as string);
	const tableRows = tableDataSlice.map((e: any, i: number) => (
		<tr key={i} className="tableitem">
			<td>{e.name}</td>
			<td>{e.mass}</td>
			<td>{e.height}</td>
			<td>{e.hair_color}</td>
			<td>{e.skin_color}</td>
		</tr>
	));
	return (
		<div>
			<h2>Data Table</h2>
			<div className="tablediv">
				<div>{loading ? "Loading" : ""}</div>
				<table>
					<tr className="tablehead">
						<th>Name</th>
						<th>Mass</th>
						<th>Height</th>
						<th>Hair Color</th>
						<th>Skin Color</th>
					</tr>
					{tableRows}
				</table>
			</div>
			<div className="paginator">
				{pagenum > 0 && (
					<Link to={"/table/" + (pagenum - 1)} className="prev-btn">
						Previous
					</Link>
				)}
				{pagenum + 1 < totalPages && (
					<Link to={"/table/" + (pagenum + 1)} className="next-btn">
						Next
					</Link>
				)}
			</div>
		</div>
	);
}

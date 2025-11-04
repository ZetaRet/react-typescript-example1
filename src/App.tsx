import React from "react";
import { Route, Routes, useParams } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useSelector } from "react-redux";
import { DataTable } from "./DataTable";

export function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

export function LoginWrapper() {
	return (
		<div>
			<LoginForm />
		</div>
	);
}

function DataTableRequire() {
	return (
		<div className="data-table-require">
			<h2>Data Table require Login</h2>
		</div>
	);
}

export function DataTableWrapper() {
	const username = useSelector((state: any) => state.table.username);
	return <div>{username ? <DataTable /> : DataTableRequire()}</div>;
}

export function AppMain() {
	return (
		<div>
			<h1>Data Table Fetch</h1>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login/">Login</Link>
						</li>
						<li>
							<Link to="/table/0">Data Table</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login/" element={<LoginWrapper />} />
					<Route path="/table/:page" element={<DataTableWrapper />} />
				</Routes>
			</Router>
		</div>
	);
}

export function App() {
	return (
		<div>
			<AppMain />
		</div>
	);
}

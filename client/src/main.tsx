import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./Header";
import Deck from "./Deck";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/deck/:deckId",
		element: <Deck />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="page">
			<Header />
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);

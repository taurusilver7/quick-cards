import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import http from "http";
import logger from "morgan";
import cors from "cors";
import { router as indexRoute } from "./routes/index";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors({ origin: "*" }));

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

app.use("/api/v1/deck", indexRoute);

const server = http.createServer(app);

// Database connection.
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGO_URL!)
	.then(() => {
		server.listen(port);
		server.on("error", onError);
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});

mongoose.connection
	.once("open", () =>
		console.log(
			`Database connected. Listening on port: ${port}. \nWaiting for requests...`
		)
	)
	.on("error", onError);

function normalizePort(val: string) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		return port;
	}
	return false;
}

function onError(error: any) {
	if (error.syscall !== "listen") {
		throw error;
	}

	const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

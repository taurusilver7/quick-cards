import express from "express";
import {
	createCard,
	createDeck,
	deleteCard,
	deletetDeck,
	getDeck,
	getDecks,
} from "../controller/deck";

const router = express.Router();

// router.get("/", (req, res) => {
// 	res.send("Hello World");
// });

router.get("/", getDecks);
router.post("/", createDeck);
router.delete("/:deckId", deletetDeck);
router.get("/:deckId", getDeck);

router.post("/:deckId/card", createCard);
router.delete("/:deckId/card/:index", deleteCard);

export { router };

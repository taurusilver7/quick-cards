import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDecks(req: Request, res: Response) {
	try {
		const decks = await Deck.find();
		res.status(200).json(decks);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
}

export async function getDeck(req: Request, res: Response) {
	const { deckId } = req.params;

	try {
		const deck = await Deck.findById(deckId);
		res.status(200).json(deck);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

export async function createDeck(req: Request, res: Response) {
	const title = req.body.title;

	if (title) {
		const createdDeck = new Deck({
			title,
		});
		const newDeck = await createdDeck.save();
		res.status(201).json(newDeck);
	} else {
		res.status(400).json({ message: "Deck needs a title to create." });
	}
}

export async function deletetDeck(req: Request, res: Response) {
	const deckId = req.params.deckId;

	try {
		const deck = await Deck.findByIdAndDelete(deckId);
		res.status(200).json("Deck deleted Successfully");
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
}

export async function createCard(req: Request, res: Response) {
	const { deckId } = req.params;
	try {
		const deck = await Deck.findById(deckId);
		if (!deck) {
			return res.status(400).json("Deck doesn't exist");
		}
		const { text } = req.body;
		deck.cards.push(text);
		await deck.save();
		res.status(200).json(deck);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
}

export async function deleteCard(req: Request, res: Response) {
	const { deckId, index } = req.params;
	try {
		const deck = await Deck.findById(deckId);
		if (!deck) {
			return res.status(400).json("Deck doesn't exist");
		}
		deck.cards.splice(parseInt(index), 1);
		await deck.save();
		res.status(200).json(deck);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}

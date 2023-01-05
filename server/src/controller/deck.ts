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

export async function getDeck(req: Request, res: Response) {}

export async function createDeck(req: Request, res: Response) {
	const title = req.body.title;
	const createdDeck = new Deck({
		title,
	});
	const newDeck = await createdDeck.save();
	res.status(201).json(newDeck);
}

export async function deletetDeck(req: Request, res: Response) {}

export async function createCard(req: Request, res: Response) {}

export async function deleteCard(req: Request, res: Response) {}

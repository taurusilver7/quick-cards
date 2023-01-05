import { API_ROOT_URL, TDeck } from "./config";

const API_URL = `${API_ROOT_URL}/api/v1`;

export async function createDeck(title: string) {
	const response = await fetch(`${API_URL}/deck`, {
		method: "POST",
		body: JSON.stringify({
			title,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
}

export async function getDecks(): Promise<TDeck[]> {
	const response = await fetch(`${API_URL}/deck`);
	return response.json();
}

export async function getDeck(deckId: string): Promise<TDeck> {
	const response = await fetch(`${API_URL}/deck/${deckId}`);
	return response.json();
}

export async function deleteDeck(deckId: string) {
	await fetch(`${API_URL}/deck/${deckId}`, {
		method: "DELETE",
	});
}

export async function createCard(deckId: string, text: string): Promise<TDeck> {
	const response = await fetch(`${API_URL}/deck/${deckId}/card`, {
		method: "POST",
		body: JSON.stringify({
			text,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
}

export async function deleteCard(
	deckId: string,
	index: number
): Promise<TDeck> {
	const response = await fetch(`${API_URL}/deck/${deckId}/card/${index}`, {
		method: "DELETE",
	});
	return response.json();
}

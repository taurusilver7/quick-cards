export const API_ROOT_URL =
	import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export type TDeck = {
	title: string;
	cards: string[];
	_id: string;
};

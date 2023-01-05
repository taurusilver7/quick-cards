import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Deck.css";
import { TDeck } from "./api/config";
import { createCard, deleteCard, getDeck } from "./api";

const Deck = () => {
	const [deck, setDeck] = useState<TDeck | undefined>();
	const [cards, setCards] = useState<string[]>([]);
	const [text, setText] = useState("");
	const { deckId } = useParams();

	async function handleCard(e: React.FormEvent) {
		e.preventDefault();
		const { cards: serverCards } = await createCard(deckId!, text);
		setCards(serverCards);
		setText("");
	}

	async function handleDeleteCard(index: number) {
		if (!deckId) return;

		const newDeck = await deleteCard(deckId, index);
		setCards(newDeck.cards);
	}

	useEffect(() => {
		async function fetchDeck() {
			if (!deckId) return;

			const newDeck = await getDeck(deckId);
			setDeck(newDeck);
			setCards(newDeck.cards);
		}

		fetchDeck();
	}, [deckId]);

	return (
		<div className="deck">
			<form onSubmit={handleCard}>
				<label htmlFor="card-text">Card Text</label>
				<input
					value={text}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setText(e.target.value);
					}}
					type="text"
					id="card-text"
				/>
				<button>Create Card</button>
			</form>

			<h1>{deck?.title}</h1>

			<ul className="cards">
				{cards?.map((card, index) => (
					<li key={index}>
						<button onClick={() => handleDeleteCard(index)}>x</button>
						{card}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Deck;

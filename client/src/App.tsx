import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { TDeck } from "./api/config";
import { createDeck, deleteDeck, getDecks } from "./api";

function App() {
	const [decks, setDecks] = useState<TDeck[]>([]);
	const [title, setTitle] = useState("");
	const navigate = useNavigate();

	async function HandleDeck(e: React.FormEvent) {
		e.preventDefault();

		// Talk to the backend & persist the deck with fetch()
		const deck = await createDeck(title);
		// setDecks(deck);
		setDecks([...decks, deck]);
		setTitle("");
	}

	async function handleDelete(deckId: string) {
		await deleteDeck(deckId);
		setDecks(decks.filter((deck) => deck._id !== deckId));
	}

	useEffect(() => {
		async function fetchDecks() {
			const newDecks = await getDecks();
			setDecks(newDecks);
		}
		fetchDecks();
	}, []);

	return (
		<div className="container">
			<div className="app">
				<form onSubmit={HandleDeck}>
					<label htmlFor="deck-title">Deck Title</label>
					<input
						type="text"
						placeholder="Create a deck here.."
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setTitle(e.target.value);
							// console.log(title);
						}}
						value={title}
						id="deck-title"
					/>
					<button>Create Deck</button>
				</form>

				<h1>Your Decks</h1>

				<ul className="decks">
					{decks.map((deck, index) => (
						<li key={index} onClick={() => navigate(`deck/${deck._id}`)}>
							<button
								onClick={() => handleDelete(deck._id)}
								className="close"
							>
								x
							</button>
							<Link
								to={`deck/${deck._id}`}
								style={{ textDecoration: "none" }}
							>
								{deck.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;

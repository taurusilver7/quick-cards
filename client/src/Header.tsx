import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div>
					<h2>
						<a style={{ textDecoration: "none", color: "#ddd" }} href="/">
							Quick Cards
						</a>
					</h2>
				</div>

				<div
					style={{
						display: "flex",
						alignContent: "center",
						justifyContent: "space-betweeb",
						gap: "10px",
					}}
				>
					<div>
						<a href="/">Decks</a>
					</div>

					<div>
						<a href="/login">login</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

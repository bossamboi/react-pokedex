"use strict";

import Card from "react-bootstrap/Card";

// function Pokecard({ name, image, type, exp }) {
// 	return (
// 		<div>
// 			<h3>{name}</h3>
// 			<img src={image} alt={name} />
// 			<p>Type: {type}</p>
// 			<p>EXP: {exp}</p>
// 		</div>
// 	);
// }

function Pokecard({ name, image, type, exp }) {
	return (
		<Card style={{ width: "10rem" }}>
			<Card.Img variant="top" src={image} alt={name} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<p>Type: {type}</p>
					<p>EXP: {exp}</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Pokecard;

"use strict";

import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {
	return (
		<div style={{ display: "flex" }}>
			{pokemon.map((p) => (
				<Pokecard
					name={p.name}
					image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
					type={p.type}
					exp={p.base_experience}
				/>
			))}
		</div>
	);
}

export default Pokedex;

import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor() {
		super();

		this.state = {
			position: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(arraySize) {
		if(this.state.position + 1 < arraySize) {
			this.setState((prevState, _props) => ({
				position: prevState.position + 1
			}));
		} else {
			this.setState({ position: 0 });
		}
	}

	render() {
		const position = this.state.position;
		const pokemons = this.props.pokemons;
		return (
			<div className="pokedex">
				<Pokemon pokemon={pokemons[position]} />
				<button type="button" onClick={() => this.handleClick(pokemons.length)}>Próximo Pokémon</button>
				
			</div>
		);
	}
}

export default Pokedex;
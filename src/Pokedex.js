import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor() {
		super();

		this.state = {
			position: 0,
			type: 'Fire',
		};

		this.handleClick = this.handleClick.bind(this);
		this.filter = this.filter.bind(this);
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

	filter(event) {
		this.setState({ type: event.target.name });
	}

	render() {
		const position = this.state.position;
		const pokemons = this.props.pokemons;
		const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === this.state.type);
		return (
			<div className="pokedex">
				<Pokemon pokemon={filteredPokemons[position]} />
				<button type="button" name="Fire" onClick={this.filter}>Fire</button>
				<button type="button" name="Psychic" onClick={this.filter}>Psychic</button>
				<button	type="button"	onClick={() => this.handleClick(filteredPokemons.length)}>Próximo Pokémon</button>
			</div>
		);
	}
}

export default Pokedex;
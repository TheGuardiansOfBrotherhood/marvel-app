import * as React from 'react';
import * as $ from 'jquery';

import './content.css';

import { Character } from './../interfaces';

import { Item } from './../components';

interface MyComponentProps { }
interface MyComponentState { characters :  Array<Character> }

export class Content extends React.Component<MyComponentProps, MyComponentState> {

	constructor() {
		super();

		this.state = {
			characters: []
		}
	}

	componentWillMount() {
		this.search();
	}

	search(event?: any) {
		$.ajax({
	         method: 'GET',
	         url: 'https://gateway.marvel.com/v1/public/characters?apikey=a2d01370e4278b621c371892e9041094&ts=1&hash=0137664330e5b71ccbdff2421cafa4d7',
	         success: (result) => {
				const characters = result.data.results as Array<Character>;
				this.setState({ characters });
	         }
		 });
	}

	render() {
		const items = this.getItems();
		return (
			<div className="content">
				{ items }
			</div>
		);
	}

	getItems() {
		return this.state.characters.map(character => <Item key={character.id} character={character} />);
	}
}
import * as React from 'react';
import * as $ from 'jquery';

import './content.css';

import { Character } from './../interfaces';

import { Item, Search, Form } from './../components';

interface MyComponentProps { }
interface MyComponentState { characters :  Array<Character> }

const HOST = 'https://gateway.marvel.com';
const API_KEY = 'a2d01370e4278b621c371892e9041094';
const TIMESTAMP = 1;
const HASH = '0137664330e5b71ccbdff2421cafa4d7';

export class Content extends React.Component<MyComponentProps, MyComponentState> {

	private searchTimeout: any = null;

	constructor() {
		super();

		this.state = {
			characters: []
		}
	}

	componentWillMount() {
		this.search();
	}

	search(query: string = 'spider') {
		$.ajax({
	         method: 'GET',
	         url: `${HOST}/v1/public/characters?nameStartsWith=${query}&apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${HASH}`,
	         success: (result) => {
				const characters = result.data.results as Array<Character>;
				this.setState({ characters });
	         }
		 });
	}

	render() {
		const items = this.getItems();
		return (
			<div>
                <Form addCharacter={this.addCharacter.bind(this)} />
				<Search onKeySearch={this.onKeySearch.bind(this)} />
				<div className="content row col-4 grey-50">
					{ items }
				</div>
			</div>
		);
	}

    addCharacter(name: string, description: string) {
        const character: Character = {
            id: this.state.characters.length + 1,
            name,
            description
        };

        this.setState({
            characters: this.state.characters.concat([character])
        });
    }

	getItems() {
		return this.state.characters.map(character => <Item key={character.id} character={character} />);
	}

	onKeySearch(event: any) {

		const value = event.target.value;

		if (this.searchTimeout != null) {
			clearTimeout(this.searchTimeout);
		}

        this.searchTimeout = setTimeout(() => {
			this.search(value);
        }, 500);
    }
}
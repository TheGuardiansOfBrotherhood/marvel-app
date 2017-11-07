import * as React from 'react';
import * as $ from 'jquery';

import './content.css';

import { Character } from './../interfaces';

export class Content extends React.Component {

	search(event: any) {
		$.ajax({
	         method: 'GET',
	         url: 'https://gateway.marvel.com/v1/public/characters?apikey=a2d01370e4278b621c371892e9041094&ts=1&hash=0137664330e5b71ccbdff2421cafa4d7',
	         success: (result) => {

				const characters: Array<Character> = result.data.results;

				characters.forEach((character: Character) => {
					console.log('>>>>', character.name);
				});
	         }
		 });
	}

	render() {
		return (
			<div className="content">
				<input type="text" onKeyPress={this.search} />
			</div>
		);
	}
}
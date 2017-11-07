import React, { Component } from 'react';

import './content.css';

import jQuery from 'jquery';

// import { Character } from './../interfaces/character';

export class Content extends Component {

	search(event) {
		jQuery.ajax({
	         method: 'GET',
	         url: 'https://gateway.marvel.com/v1/public/characters?apikey=a2d01370e4278b621c371892e9041094&ts=1&hash=0137664330e5b71ccbdff2421cafa4d7',
	         success: (result) => {
				console.log(result.data.results);
	         }
		 });
	}

	render() {
		return (
			<div className="content">
				<input type="text" onKeyPress={ this.search } />
			</div>
		);
	}
}
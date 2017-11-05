import React, { Component } from 'react';

import './App.css';

import { Header } from './components/header';
import { Bottom } from './components/bottom';

class App extends Component {
	render() {
		return (
			<div>
				<Header className="red"/>
				Content center
				<Bottom />
			</div>
		);
	}
}

export default App;
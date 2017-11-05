import React, { Component } from 'react';

import './App.css';

import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Content />
				<Footer />
			</div>
		);
	}
}

export default App;
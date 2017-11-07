import * as React from 'react';

import './item.css';

import { Character } from './../interfaces';

interface MyComponentProps { character: Character }
interface MyComponentState { }

export class Item extends React.Component<MyComponentProps, MyComponentState> {

    render() {

        return (
			<div className="item">
                <img src={ this.props.character.thumbnail.path + '/portrait_medium.' + this.props.character.thumbnail.extension } />
                <h1>{this.props.character.name}</h1>
            </div>
		);
    }
}
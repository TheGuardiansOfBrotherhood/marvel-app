import * as React from 'react';

import './item.css';

import { Character } from './../interfaces';

interface MyComponentProps { character: Character }
interface MyComponentState { }

export class Item extends React.Component<MyComponentProps, MyComponentState> {

    render() {
        return (
            <div className="item">
                <div>
                    <img className="responsive-img image-rounded" src={ this.props.character.thumbnail.path + '/standard_xlarge.' + this.props.character.thumbnail.extension }
                         alt={ this.props.character.name } title={ this.props.character.name } />
                </div>
                <div>
                    <h5>
                        { this.props.character.name }
                    </h5>
                </div>
            </div>
		);
    }
}
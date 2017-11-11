import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './item.css';
import { Character} from './../interfaces';
import {Detail} from './../components';

interface MyComponentProps { character: Character }
interface MyComponentState { }

export class Item extends React.Component<MyComponentProps, MyComponentState> {
    
    constructor() {
		super();

		this.state = {
			character: null
		}
    }
    
    render() {
        return (
            <div className="item">
                <div>
                    <img className="responsive-img image-rounded" 
                      src={ this.props.character.thumbnail ? this.props.character.thumbnail.path + '/standard_xlarge.' + this.props.character.thumbnail.extension : ''  }
                         alt={ this.props.character.name } title={ this.props.character.name }  onClick={this.detailCharacter.bind(this)} />
                </div>
                <div>
                    <h3>
                        { this.props.character.name }
                    </h3>
                </div>
            </div>
		);
    }

    detailCharacter(){        
        ReactDOM.render(
            <Detail character={this.props.character}/>,
            document.getElementById('modal') as HTMLElement
          );
    }
}
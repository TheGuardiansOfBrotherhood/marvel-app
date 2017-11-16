import * as React from 'react';
import './item.css';
import { Character} from './../interfaces';
import { Link } from 'react-router-dom';

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
                    <Link to={'/detail/' + this.props.character.id} >
                        <img className="responsive-img image-rounded"
                            src={ this.props.character.thumbnail ? this.props.character.thumbnail.path + '/standard_xlarge.' + this.props.character.thumbnail.extension : ''  }
                            alt={ this.props.character.name } title={ this.props.character.name }/>
                    </Link>
                </div>
                <div>
                    <h3>
                        { this.props.character.name }
                    </h3>
                </div>
            </div>
		);
    }

}
import * as React from 'react';
import './detail.css';
import * as $ from 'jquery';
import { Character} from './../interfaces';
import { withRouter } from 'react-router-dom';

const HOST = 'https://gateway.marvel.com';
const API_KEY = 'a2d01370e4278b621c371892e9041094';
const TIMESTAMP = 1;
const HASH = '0137664330e5b71ccbdff2421cafa4d7';

interface MyComponentProps {}
interface MyComponentState { character: Character }

class Detail extends React.Component<MyComponentProps, MyComponentState>{

	constructor(props : MyComponentProps){
		super(props);
		this.state = {
			character: {}
		}
	}

	componentWillMount() {
		this.search();
	}

	search() {
		$.ajax({
	         method: 'GET',
	         url: `${HOST}/v1/public/characters/${this.props['match'].params.id}?apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${HASH}`,
	         success: (result) => {
				const character = result.data.results[0] as Character;
				this.setState({character});
	         }
		 });
	}


	render() {
		const character = this.state.character;
		return (
			<div className="detail row col-1">
				<h1>{character.name}</h1>
				<img className="responsive-img"
						src={ character.thumbnail ? character.thumbnail.path + '/portrait_fantastic.' + character.thumbnail.extension : ''  }
						alt={ character.name } title={ character.name }/>
				<p> {character.description} </p>
			</div>
		)
	}
}
export default withRouter(Detail);
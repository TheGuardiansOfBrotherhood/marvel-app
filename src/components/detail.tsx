import * as React from 'react';
import './detail.css';

import { Character} from './../interfaces';
import { Modal, Button} from 'react-bootstrap';

interface MyComponentProps { character: Character }

export class Detail extends React.Component<MyComponentProps>{

    constructor(){
        super();
        this.state = {
			show: true
        }    
    }

    render(){
        let close = () => this.setState({ show: false });        

        return (
            
            <div className="detail.css">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title className='titleModal'><strong>{this.props.character.name}</strong></Modal.Title>
                    </Modal.Header>
                
                <Modal.Body className='bodyModal'>
                    
                        <img className="responsive-img" src={ this.props.character.thumbnail.path 
                            + '/portrait_fantastic.' + this.props.character.thumbnail.extension }
                            alt={ this.props.character.name } title={ this.props.character.name } />    

                        <p className="row col-4">{this.props.character.description}</p>                    
                    
                                           
                </Modal.Body>
            
                <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
          </div>
        )

    }
      

}


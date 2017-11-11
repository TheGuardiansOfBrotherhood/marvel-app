import * as React from 'react';

import './form.css';

interface MyComponentProps { addCharacter: Function }
interface MyComponentState { name: string, description: string }

export class Form extends React.Component<MyComponentProps, MyComponentState> {

    constructor(props : MyComponentProps) {
        super(props);

        this.state = {
            name: '',
            description: ''
        }
    }

    handleNameChange(event: any) {
        this.setState({name: event.target.value});
    }

    handleDescriptionChange(event: any) {
        this.setState({description: event.target.value});
    }

    render() {

        return (
            <div className="row col-3 grey-300">
                <div></div>
                <div>
                    <form className="form" onSubmit={e => this.handleSubmit(e)}>
                        <h3>+1 Personagem</h3>
                        <div>
                            <input className="form-control" placeholder="Nome" value={this.state.name} onChange={this.handleNameChange.bind(this)}/><br/>
                            <textarea className="form-control" placeholder="Descrição" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></textarea><br/>
                            <input type="file" className="form-control-file"/><br/>
                            <button className="btn red" type="submit">Adicionar</button>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        );
    }

    public handleSubmit(event: any) : void {
        event.preventDefault();

        let name = this.state.name;
        let description = this.state.description;
        this.props.addCharacter(name, description);
    }
}
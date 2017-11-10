import * as React from 'react';

import './search.css';

interface MyComponentProps { onKeySearch: React.KeyboardEventHandler<HTMLInputElement> }
interface MyComponentState { }

export class Search extends React.Component<MyComponentProps, MyComponentState> {

    render() {

        return (
			<div className="search grey">
                <div className="box">
                    <div className="container-3">
                        <span className="icon">
                            <i className="fa-search"></i>
                        </span>
                        <input type="search" id="search" placeholder="Personagem..." onKeyUp={ this.props.onKeySearch } />
                    </div>
                </div>
            </div>
		);
    }
}
import React, { Component } from 'react';
import jQuery from 'jquery';
import {Character} from './interfaces'

class Marvel extends Component {


    componentWillMount() {
       this._buscarMarvel();
       this.state = {
        Character: []
      };
    }


    

    _buscarMarvel() {
       jQuery.ajax({
           method: 'GET',
           url: 'https://gateway.marvel.com/v1/public/characters?apikey=a2d01370e4278b621c371892e9041094&ts=1&hash=0137664330e5b71ccbdff2421cafa4d7',
           success: (marvels) => {
                this.setState({marvels})

           }
      });
    }

    
    render() {

    return (
        <div className="Marvel">
        
          <h1 className="App-title">Welcome to Marvel Stars</h1>

        <p className="App-intro">
          To get started, edit  and save to reload.
        </p>
      </div>
    );
  }
}

export default Marvel;

import * as React from 'react';
import './App.css';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Event } from './interfaces';

class App extends React.Component {

  test() {
    let s: Event = {name: '', resourceURI: ''};
    console.log(s);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

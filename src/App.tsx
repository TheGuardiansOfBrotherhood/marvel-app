import * as React from 'react';
import './App.css';

import { Header } from './components/header';
import { Footer } from './components/footer';

class App extends React.Component {

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

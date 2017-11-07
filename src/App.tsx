import * as React from 'react';
import './App.css';

import { Content, Footer, Header } from './components';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

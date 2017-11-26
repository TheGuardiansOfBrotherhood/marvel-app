import * as React from 'react';
import './App.css';

import { Content, Footer, Header } from './components';
import Detail from './components/detail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Content}/>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

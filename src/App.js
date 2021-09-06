import React  from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route}  from "react-router-dom";


import Header from './containers/Headers';
import ProductListing from './containers/ProductListing';
import ProductDeails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productid" exact component={ProductDeails} />
      <Route> 404 Not Found!</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

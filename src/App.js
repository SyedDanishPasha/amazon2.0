import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { db } from './firebase'

function App() {
  const [ cartitems, setcartitems ] = useState([]);

  const getCartItems = () =>
  {
    db.collection('cartitems').onSnapshot((snapshot) =>
    {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setcartitems(tempItems);
    })
  }

  useEffect(() =>
  {
    getCartItems();
  }, [])

  
  
  return (
    <Router>
      <Container>
        <Header cartitems={cartitems}/>
        <Switch>
          
          <Route path="/cart">
            <Cart cartitems={cartitems} />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Container>
    </Router>
    
  );
}

export default App;
 
const Container = styled.div`

`;
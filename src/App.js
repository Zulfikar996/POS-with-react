import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'
import Product from './components/Product/Product'
import Modals from './components/Modals/Modals'

function App() {
  return (
      <Router>
                <div className='row' >
                    <div className='content col-md-9' style={{backgroundColor:'#d9d9d9'}} >
                        <Product/>
                    </div>
                    <div className='cart col-md-3 bg-dark' style={{position:"fixed", right:-20, top:0, bottom:0,}}>
                      <div className='upcart'>
                        <a style={{fontFamily:"Airbnb Cereal App"}}> zulul</a>
                      </div>
                      asdsa
                    </div>
                </div>


              <Modals />
      </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Product from './components/Product/Product'
import Modals from './components/Modals/Modals'

function App() {
  return (
      <Router>
                <div className='row'>
                    <div className='content col-md-9' >
                        <Navbar/>
                        <Product/>
                    </div>
                    <div className='cart col-md-3' style={{backgroundColor:'#404040', position:"fixed", right:0, top:0, bottom:0,}}>
                      <div className='upcart'>
                        zululul
                      </div>
                      asdsa
                    </div>
                </div>


              <Modals />
      </Router>
  );
}

export default App;

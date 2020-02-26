import React, {Component} from 'react'
import axios from 'axios'

class Navbar extends Component {


    
    onChangeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    } 


    render(){
        return(
            <nav className=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark" >
                <a className="navbar-brand">FamiRest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                            </a>
                         
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/category/food">Food</a>
                            <a className="dropdown-item" href="/category/drink">Drink</a>
                        </div>
                        </li>
                    <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter" style={{backgroundColor:'transparent', border:'0px solid black'}}>
                    <i className="material-icons">
                        add_to_queue
                    </i>
                    </button>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default Navbar
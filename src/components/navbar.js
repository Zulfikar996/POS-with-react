import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                            </a>
                         
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Food</a>
                            <a className="dropdown-item" href="#">Drink</a>
                        </div>
                        </li>
                    <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter" style={{backgroundColor:'transparent', border:'0px solid black'}}>
                    <i class="material-icons">
                        add_to_queue
                    </i>
                    </button>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </nav>
        )
    }
}

export default Navbar
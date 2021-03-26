import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import CarouselBt from '../carousel/Carousel'
import photo from './photo.jpeg'
import './styleHeader.scss'

function Header({titulo}) {

    const reloadCont = () => {
        window.location.replace('/contacto');
    }

    const reloadRepo = () => {
        window.location.replace('/repositorio');
    }

    const reloadCurr = () => {
        window.location.replace('/curriculum');
    }

    const reloadInit = () => {
        window.location.replace('/');
    }


    return(
        <Router>
                <div className="thumb-nav">
                    <input type="checkbox" className="nav-open-check"/>
                    <div className="nav-open-button">
                        <span className="material-icons">
                            add
                        </span>
                    </div>
                    <div className="nav-options">
                        <div>
                            <Link to="/" activeClassName="active" onClick={reloadInit}>
                                <span className="material-icons">account_circle</span>
                            </Link>
                            
                        </div>
                        <div>
                            <Link to="/repositorio" activeClassName="active" onClick={reloadRepo}>
                                <span className="material-icons">contact_page</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/curriculum" activeClassName="active" onClick={reloadCurr}>
                                <span className="material-icons">description</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/contacto" activeClassName="active" onClick={reloadCont}>
                                <span className="material-icons">forward_to_inbox</span>
                            </Link>
                        </div>
                    </div>
                </div>
        </Router>        
    )
}
export default Header;
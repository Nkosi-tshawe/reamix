import React from 'react';
import {Link} from "gatsby";

const ListLink = props => (
    <li className="nav-item">
      <Link to={props.to} className="nav-link" activeClassName="active">
         <i className={props.icon}></i>
            <span>{props.title}</span>
      </Link>
    </li>
  )

export default function SideBar() {
    return (
        <aside id="sidebar" className="sidebar-warning">
            <div className="sidebar-header d-flex align-items-center">
                <a href="../index.html" className="brand">
                    {/* <img src="../assets/images/logos/logo.svg" alt="listen-app"/> */}
                    <h4>
                        <i className="ion-md-musical-note"></i>
                    </h4>
                    <span>Lokalit</span>
                </a>

                <button type="button" className="btn p-0 ml-auto" id="hideSidebar">
                    <i className="ion-md-arrow-back h3"></i>
                </button>

                <button type="button" className="btn toggle-menu" id="toggleSidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

                <nav className="navbar">
                            <ul className="navbar-nav" data-scrollable="true">
                                <li className="nav-item nav-header">Browse Music</li> 
                                <ListLink to="/" icon="la la-home" title="Home" />
                                <ListLink to="/genres/" icon="la la-diamond" title="Genres" />
                                <ListLink to="/singles/" icon="la la-music" title="Singles"/>
                                <li className="nav-item nav-header">Your Music</li>
                                <ListLink to="/favorites/" icon="la la-heart-o" title="Favorites"/>
                                <ListLink to="/history/" icon="la la-history" title="Favorites"/>
                            </ul>       
                </nav>

                <div className="sidebar-footer">
                    <a href="/" className="btn btn-block btn-warning btn-air btn-bold">
                        <i className="ion-md-musical-note"></i>
                        <span>Login</span>
                    </a>
                </div>

      </aside>

    )
}
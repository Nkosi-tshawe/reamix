import React from "react";
import {Link} from "gatsby";
import SideBar from './sidebar';
import Header from './header';
import Footer from './footer';
import Player from "./player";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
        <div className="main-wrap">
                 {/* <div id="loading">
                      <div classNameName="loader">
                          <div classNameName="eq">
                              <span classNameName="eq-bar eq-bar--1"></span>
                              <span classNameName="eq-bar eq-bar--2"></span>
                              <span classNameName="eq-bar eq-bar--3"></span>
                              <span classNameName="eq-bar eq-bar--4"></span>
                              <span classNameName="eq-bar eq-bar--5"></span>
                              <span classNameName="eq-bar eq-bar--6"></span>
                          </div>
                          <span classNameName="text">Loading</span>
                      </div>
                 </div> */}

                 <div id="wrapper" data-scrollable="true">
                      <SideBar/>
                      <main id="pageWrapper">
                        <Header/>
                        <div className="banner bg-home"></div>
                        <div className="main-container" id="appRoute">
                            {children }
                        </div>
                        {/* <Player/> */}
                        <Footer/> 
                      </main>

                 </div>

                 <div className="backdrop header-backdrop"></div>
                 <div className="backdrop sidebar-backdrop"></div>
        
        </div>


      )
}
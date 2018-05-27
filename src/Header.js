import React, { Component } from 'react';
import logo from './logo.png';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { Element, scrollSpy, Events, Link } from 'react-scroll';

export default  class Header extends Component {
    render() {
        
        return ( 
            <StickyHeader
            // This is the sticky part of the header.
                header={
                <div className="container">
                    <div class="header-wrap">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="logo" width="73" height="20" /></a>
                        </div>
                    
                        <div className="menu">
                        <Link to="test2" spy={true} smooth={true} duration={1000} offset={-140}> About </Link>
                        <Link to="test3" spy={true} smooth={true} duration={1000} offset={-140}> FAQs </Link>
                        </div>

                        <div class="start-project">
                            <a href="#">Start a project</a>
                        </div>
                    </div>
                </div>
           }
           >
           </StickyHeader>
        );
    }
}
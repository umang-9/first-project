import React, { Component } from 'react';
import logo from './logo.png';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { Element, scrollSpy, Events, Link } from 'react-scroll';
import {Animated} from "react-animated-css";

export default  class Header extends Component {
    render() {
        
        return ( 
            <StickyHeader
            // This is the sticky part of the header.
                header={
                <div className="container">
                    <div class="header-wrap">
                    <Animated animationIn="fadeInLeft"animationInDelay="800">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="logo" width="73" height="20" /></a>
                        </div>
                    </Animated>
                    
                    <Animated animationIn="fadeInDown"animationInDelay="800">
                        <div className="menu">
                        <Link to="test2" spy={true} smooth={true} duration={1000} offset={-80}> About </Link>
                        <Link to="test3" spy={true} smooth={true} duration={1000} offset={-85}> FAQs </Link>
                        </div>
                        </Animated>

                    <Animated animationIn="fadeInRight"animationInDelay="800">
                        <div class="start-project for-desktop">
                            <a href="#">Start a project</a>
                        </div>
                        </Animated>
                    </div>
                </div>
           }
           >
           </StickyHeader>
        );
    }
}
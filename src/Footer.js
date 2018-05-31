import React, { Component } from 'react';
import logo from './logo.png';
import ScrollAnimation from 'react-animate-on-scroll';
export default  class Footer extends Component {
    render() {
      return (
        <footer>
            
            <ScrollAnimation animateIn='fadeInTop'  delay='500'>
                 <div className="container"> 
                    <div className="footer-left">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="logo" width="73" height="20" /></a>
                        </div>
                        <p>A creative, full-service studio.</p>
                    </div>
 
                    <div className="footer-right">
                        <div class="social-icons">
                            <a class="instagram" href="https://www.instagram.com/" target="_blank"></a>
                            <a class="twitter" href="https://twitter.com" target="_blank"></a>
                            <a class="facebook" href="https://facebook.com" target="_blank"></a>
                        </div>
                    </div>
                 </div>
            
            </ScrollAnimation>
        </footer>
      );
    }
  }
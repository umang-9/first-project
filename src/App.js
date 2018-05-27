import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Element, scrollSpy, Events, Link } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <div class="main-content">
              <div className="top-sec section-gapping">
                <div className="container">
                  <h3>We design and build <br/> websites for rad companies.</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur <br/> vehicula augue dolor sit amet, consectetur.  </p>
                 
                  <div class="three-boxes">
                   
                   <div class="box box1">
                        <div class="box-content">
                          <h3>Clique Meet</h3>
                          <p>Social Interaction App</p>
                        </div>
                        <div class="box-image">
                          <img src="" alt=""/>
                        </div>
                    </div> 

                    <div class="box box2">
                        <div class="box-content">
                        <h3>Zbods</h3>
                          <p>Boutique Spray Tan</p>
                        </div>
                        <div class="box-image">
                          <img src="" alt=""/>
                        </div>
                    </div>

                    <div class="box box3">
                        <div class="box-content">
                          <h3>PolicyMe</h3>
                          <p>Modern Insurance</p>
                        </div>
                        <div class="box-image">
                          <img src="" alt=""/>
                        </div>
                    </div>

                    <div class="box box4">
                        <div class="box-content">
                          <h3>ApnoMed</h3>
                          <p>Medical Innovation</p>
                        </div>
                        <div class="box-image">
                          <img src="" alt=""/>
                        </div>
                    </div>
                   </div>
                </div>
              </div>
          
            <Element name="test2" id={'section2'}>
              <div className="about-sec section-gapping">
                <div className="container">
                  <div className="about-wrap">
                    <div className="about-left">
                      <h5>WHO’S BEHIND THIS?</h5>
                      <h3>About</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                      <div class="start-project">
                            <a href="#">Start a project</a>
                        </div>
                    </div>

                    <div className="about-right">
                    </div>  
                  </div>       
  
                </div>
              </div>
            </Element>

            <Element name="test3" id={'section3'}>
              <div className="faq-sec section-gapping">
                <div className="container">
                  <p> How are you world? </p>       
  
                </div>
              </div>
            </Element>
          </div>
           <Footer />
      </div>
    );
  }
}

export default App;

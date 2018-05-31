import React, { Component } from 'react';
import './App.css';

import './Responsive.css';
import Header from './Header';
import Footer from './Footer';
import { Element, scrollSpy, Events, Link } from 'react-scroll';
import Collapsible from 'react-collapsible';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.contactSubmit = this.contactSubmit.bind(this);
  }

  handleChange(e) {
    this.form.validateFields(e.currentTarget);
  }

  contactSubmit(e) {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }

  render() {
    return (
      <div className="App">
          <Header />

          <div class="main-content">
          <Element name="test1" id={'section1'}>
              <div className="top-sec section-gapping">
                <div className="container">
                  
                  <Animated animationIn="fadeInUp" animationInDelay="1200">
                    <h3>We design and build <br/> websites for rad companies.</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur <br/> vehicula augue dolor sit amet, consectetur.  </p>
                    <div class="start-project for-mobile">
                      <a href="#">Start a project</a>
                    </div>
                 </Animated>

                  <div class="three-boxes">
                    
                    <div class="box box1">
                      <div class="box-content">
                          <Animated animationIn="fadeInLeft" animationInDelay="1200">   
                            <h3>Clique Meet</h3>
                            <p>Social Interaction App</p>
                            <a class="for-mobile" href="#"></a>
                          </Animated>
                      </div>
                      
                      <Animated animationIn="fadeInRight" animationInDelay="1200">
                        <div class="box-image"> 
                          <img src="" alt=""/>
                        </div>
                      </Animated>
                    </div> 
                    
                    <div class="box box2">
                        <div class="box-content">
                          <ScrollAnimation animateIn='slideInRight'  delay='500' animateOnce='true'>
                            <h3>Zbods</h3>
                            <p>Boutique Spray Tan</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='slideInLeft'  delay='800' animateOnce='true'>
                          <div class="box-image">
                            <img src="" alt=""/>
                          </div>
                          </ScrollAnimation>
                    </div>
                    
                    <div class="box box3">
                        <div class="box-content">
                          <ScrollAnimation animateIn='slideInLeft'  delay='500' animateOnce='true'>
                            <h3>PolicyMe</h3>
                            <p>Modern Insurance</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='slideInRight'  delay='800' animateOnce='true'>
                          <div class="box-image">
                            <img src="" alt=""/>
                          </div>
                        </ScrollAnimation>
                    </div>

                    <div class="box box4">
                        <div class="box-content">
                          <ScrollAnimation animateIn='slideInRight'  delay='500' animateOnce='true'>
                            <h3>ApnoMed</h3>
                            <p>Medical Innovation</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='slideInLeft'  delay='800' animateOnce='true'>
                          <div class="box-image">
                            <img src="" alt=""/>
                          </div>
                        </ScrollAnimation>
                    </div>

                   </div>
                </div>
              </div>
            </Element>
          
            <Element name="test2" id={'section2'}>
              <div className="about-sec section-gapping">
                <div className="container">
                  
                  <div className="about-wrap">
                    <ScrollAnimation animateIn='slideInLeft'  delay='500' animateOnce='true'>
                    <div className="about-left">
                      <div className="section-title">
                        <h5>WHO’S BEHIND THIS?</h5>
                        <h3>About</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                      <div class="start-project color-black">
                            <a href="#"><span>Start a project</span></a>
                        </div>
                    </div>
                    </ScrollAnimation>

                      <ScrollAnimation animateIn='slideInRight'  delay='500' animateOnce='true'>
                    <div className="about-right">
                      <div class="top-image">
                        <img src='images/rectangle-3-copy-4.png' alt="about" width="400" height="492"/>
                      </div>
                      <div className="bottom-image">
                        <h5>SUPPORT NUMIE</h5>
                        <p>Send a refferal our way and we’ll give you <b>$500</b>. It’s that simple.</p>
                      </div>
                    </div>
                    
                    </ScrollAnimation>

                  </div>  

                  <div className="work-top">
                      <ScrollAnimation animateIn='fadeInUp'  delay='500' animateOnce='true'>
                      <div className="section-title">
                        <h5>THE DETAILS</h5>
                        <h3>Work with us.</h3>
                      </div>
                      </ScrollAnimation>
                      
                      
                      <ScrollAnimation animateIn='fadeInUp'  delay='500' animateOnce='true'>
                      <div class="work-box-wrap">
                        <div class="work-box">
                          <h3>$10K</h3>
                          <p>website design + code</p>
                        </div>
                        <div class="work-box">
                          <h3>14 day</h3>
                          <p>turnaround</p>
                        </div>
                      </div>
                       

                      <div class="start-project color-black">
                        <a href="#"><span>Start a project</span></a>
                      </div>
                      </ScrollAnimation>
                      
                    </div>     
                    
                </div>
              </div>
            </Element>

            <Element name="test3" id={'section3'}>
              <div className="faq-sec section-gapping">
                <div className="container">
                <ScrollAnimation animateIn='fadeInUp'  delay='500' animateOnce='true'>
                  <div className="section-title section-title-white">
                    <h5>YOUR QUESTIONS, ANSWERED</h5>
                    <h3>Questions?</h3>
                  </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn='fadeInUp'  delay='500' animateOnce='true'>  
                  <div class="faqs">
                    <Collapsible trigger="Lorem ipsum dolor sit amet?">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                    </Collapsible>
                    <Collapsible trigger="Lorem ipsum dolor sit amet?">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                    </Collapsible>
                      <Collapsible trigger="Lorem ipsum dolor sit amet?">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                    </Collapsible>
                    <Collapsible trigger="Lorem ipsum dolor sit amet?">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                    </Collapsible>
                    <Collapsible trigger="Lorem ipsum dolor sit amet?">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur vehicula augue. Cras ut elit accumsan, iaculis erat vitae, vestibulum enim.</p>
                    </Collapsible>
                  </div>
                  </ScrollAnimation>

                  <div class="form-sec">
                    <div class="form-top-wrap">
                    <ScrollAnimation animateIn='fadeInLeft'  delay='500' animateOnce='true'> 
                      <div className="section-title section-title-white">
                        <h5>LET’S CREATE</h5>
                        <h3>Ready? Let’s <br/> get started.</h3>
                      </div>
                      </ScrollAnimation>

                      <ScrollAnimation animateIn='fadeInRight'  delay='500' animateOnce='true'> 
                      <div class="form-top-content">
                        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Proin efficitur vehicula <br/> augue. </p>
                      </div>
                      
                    </ScrollAnimation>
                    </div>

                    <ScrollAnimation animateIn='fadeInLeft' delay='500' animateOnce='true'> 
                    <FormWithConstraints ref={form => this.form = form} onSubmit={this.contactSubmit} noValidate>
                      <div class="form-wrap">
                        <div class="input-field">
                          <input name="name" type="text"  placeholder="Your name" required onChange={this.handleChange}/>
                          <FieldFeedbacks for="name">
                            <FieldFeedback when="*"/>
                          </FieldFeedbacks>
                        </div>

                        <div class="input-field"> 
                          <input name="email" type="email" placeholder="Email" required onChange={this.handleChange}/>
                          <FieldFeedbacks for="email">
                            <FieldFeedback when="*"/>
                          </FieldFeedbacks>
                        </div>
                      </div> 

                      <div class="form-wrap">
                        <div class="input-field">
                          <select name="start" required onChange={this.handleChange} >
                            <option value="">When would you like to start?</option>
                            <option value="value1">This Week</option>
                            <option value="value2">This Month</option>
                            <option value="value3">Next Month</option>
                          </select>
                          <FieldFeedbacks for="start">
                            <FieldFeedback when="*"/>
                          </FieldFeedbacks>
                        </div>
                        <div class="input-field">
                          <input type="text" name="website" placeholder="Current website (Optional)" />
                        </div>
                      </div> 

                      <div class="form-wrap">
                        <textarea placeholder="Anything else we should know? (Optional)">
                        </textarea>                    
                      </div>
                      
                      <div class="submit-wrap">
                        <div class="submit-btn">
                          <input type="submit" value="SUBMIT" />
                        </div>
                      </div>
                    
                      </FormWithConstraints>
                      </ScrollAnimation>  
                  </div>

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

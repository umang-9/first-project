import React, { Component } from 'react';
import './App.css';

import './Responsive.css';
import Header from './Header';
import Footer from './Footer';
import { Element, scrollSpy, Events, Link } from 'react-scroll';
import Collapsible from 'react-collapsible';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
 }

 handleValidation(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     //Name
     if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
     }

     if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
          }          
     }

     //Email
     if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
     }

     if(typeof fields["email"] !== "undefined"){
      if(!fields["email"].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
        formIsValid = false;
        errors["email"] = "Email is invalid";
    }   
    }

    //Start
    if(!fields["start"]){
      formIsValid = false;
      errors["start"] = "You must select one option";
   }



    this.setState({errors: errors});
    return formIsValid;
}

contactSubmit(e){
     e.preventDefault();
     if(this.handleValidation()){
      console.log("Form submitted");
     }else{
      console.log("Form has errors.")
     }

 }

 handleChange(field, e){         
     let fields = this.state.fields;
     fields[field] = e.target.value;        
     this.setState({fields});
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
                      <ScrollAnimation animateIn='fadeInLeft'  delay='800' animateOnce='true'>   
                            <h3>Clique Meet</h3>
                            <p>Social Interaction App</p>
                            <a class="for-mobile" href="#"></a>
                            </ScrollAnimation>
                      </div>
                      
                      <ScrollAnimation animateIn='fadeInRight'  delay='800' animateOnce='true'>
                        <div class="box-image"> 
                          <img src="" alt=""/>
                        </div>
                        </ScrollAnimation>
                    </div> 
                    
                    <div class="box box2">
                        <div class="box-content">
                          <ScrollAnimation animateIn='fadeInRight'  delay='800' animateOnce='true' animatePreScroll={false}>
                            <h3>Zbods</h3>
                            <p>Boutique Spray Tan</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='fadeInLeft'  delay='800' animateOnce='true' animatePreScroll={false}>
                          <div class="box-image">
                            <img src="" alt=""/>
                          </div>
                        </ScrollAnimation>
                    </div>
                    
                    <div class="box box3">
                        <div class="box-content">
                          <ScrollAnimation animateIn='fadeInLeft'  delay='800' animateOnce='true' animatePreScroll={false}>
                            <h3>PolicyMe</h3>
                            <p>Modern Insurance</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='fadeInRight'  delay='800' animateOnce='true' animatePreScroll={false}>
                          <div class="box-image">
                            <img src="" alt=""/>
                          </div>
                        </ScrollAnimation>
                    </div>

                    <div class="box box4">
                        <div class="box-content">
                          <ScrollAnimation animateIn='fadeInRight'  delay='800' animateOnce='true' animatePreScroll={false}>
                            <h3>ApnoMed</h3>
                            <p>Medical Innovation</p>
                            <a class="for-mobile" href="#"></a>
                          </ScrollAnimation>
                        </div>

                        <ScrollAnimation animateIn='fadeInLeft'  delay='800' animateOnce='true' animatePreScroll={false}>
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
                    <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                      <div class="form-wrap">
                        <div class="input-field">
                          <input name="name" type="text"  placeholder="Your name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                          <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        </div>

                        <div class="input-field"> 
                          <input name="email" type="email" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                          <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        </div>
                      </div> 

                      <div class="form-wrap">
                        <div class="input-field">
                          <select name="start"  onChange={this.handleChange.bind(this, "start")} value={this.state.fields["start"]}>
                            <option value="">When would you like to start?</option>
                            <option value="value1">This Week</option>
                            <option value="value2">This Month</option>
                            <option value="value3">Next Month</option>
                          </select>
                          <span style={{color: "red"}}>{this.state.errors["start"]}</span>

                        
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
                      <span style={{color: "green"}}>{this.state.errors["success"]}</span>
                      <span style={{color: "red"}}>{this.state.errors["error"]}</span>
                      </form>
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

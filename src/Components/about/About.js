import React from 'react';
import {NavLink} from 'react-router-dom'
import './About.css';
import Logo  from '../../assets/logo.png';

function About(){
    return(
        <div className="users-dashboard"> 
            <div className="left-menu">
                <div className="left-heading">
                    <h1>ReactJs</h1>
                </div>
                <div className="menu-items">
                    <ul>
                        <li><NavLink to="/dashboard" activeClassName="link-active" className="left-link">DASHBOARD</NavLink></li><hr/>
                        <li><NavLink to="/about" activeClassName="link-active" className="left-link">ABOUT</NavLink></li><hr/>
                        <li><NavLink to="/team" activeClassName="link-active" className="left-link">TEAM</NavLink></li><hr/>
                    </ul>
                </div>
            </div>
            <div className="about">
                    <h1 className="about-title">About ReactJS</h1>
                    <hr/>
                    <div className="about-content">
                        <div><img src={Logo}></img></div>
                        <div className="about-text">
                        <p>ReactJS is a component-based javascript library which is 
                           used for building an interactive and dynamic user interface for 
                           websites and mobile applications specifically for developing single-page 
                           applications where data reflects in real-time. Currently, it is one 
                           of the most popular front-end JavaScript libraries in the market. 
                           It deals with View in the MVC(Model - View - Controller).<br/><br/>
                           In React everything is components the complete homepage is divided 
                           into small parts that merged together to complete the view. The main 
                           ReactJS Feature is the Virtual-DOM where only one-way data binding is 
                           present wherein AngularJS two way data binding was there any changes to 
                           the view are also reflected in the data and vice versa but in reactjs 
                           Instead of updating the DOM directly React makes two copies of a Virtual DOM, 
                           the original and an updated version that reflects changes displayed in from 
                           the view.</p>
                        </div>
                    </div> 
            </div> 
        </div>    
    );
}

export default About;
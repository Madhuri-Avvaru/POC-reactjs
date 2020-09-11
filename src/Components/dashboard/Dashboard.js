import React from 'react';
import './Dashboard.css';
import {NavLink} from 'react-router-dom'

function Dashboard(){
    return(
        <div className="users-dashboard "> 
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
            <div className="welcome">
                    <h2>Welcome {}</h2>
                    <hr/>
                    <h4>Account Balance: {} </h4>
                    <div>User table</div>
                    <hr/>
                    <div className="welcome-bottom">
                        <div className="subscribe">
                            <h4>Subscribe to Alerts</h4><br/><br/><br/>
                            <input type="checkbox"/>
                            <label className="subscribe-menu">SMS Alert</label><br/>
                            <input type="checkbox" />
                            <label className="subscribe-menu">Marketing Newsletter</label><br/>
                            <input type="checkbox"/>
                            <label className="subscribe-menu">Flyers</label><br/><br/>
                            <button type="submit">Submit</button> 
                        </div>
                        <div className="data-binding">
                            <h4>Two Way Data Binding</h4><br/><br/>
                            <input className="binding-text" type = "text" placeholder="Enter value for two way binding"></input>
                        </div>
                    </div> 
            </div>  
        </div>  
    );
}
export default Dashboard;


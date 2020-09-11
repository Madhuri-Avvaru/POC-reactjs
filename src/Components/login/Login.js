import React, {Component, useState} from "react";
import './Login.css';
import axios from "axios";
import { setUserSession } from '../../Utils/common';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            setincorrectpassword: false
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({ 
            [event.target.name]: event.target.value
        }) ;
        console.log(event.target.name);
    }
    handleSubmit(event){
        const { username, password} = this.state;
        axios.post(
            "http://localhost:4000/users",
            {
                users:{
                    username: this.state.username,
                    password: this.state.password
                }
            },
            // { withCredentials: true}
        )
        .then(response => {
            console.log("res from login", response);
            setUserSession(response.data.token, response.data.user);
            this.props.history.push('/dashboard');
        })
        .catch(error => {
            if(this.state.username==="")
        {
            this.setState({ setincorrectpassword: true}) ;
          }
        //   else if(this.state.username === this.state.password ){
        //     this.props.history.push('./Dashboard');
        //   }
          else{ 
            this.setState({ setincorrectpassword: true}) ;
          }
            console.log("registration error", error);
        });
        // event.preventDefault();
    }
        // if(this.state.username==="")
        // {
        //     this.setState({ setincorrectpassword: true}) ;
        //   }
        //   else if(this.state.username === this.state.password ){
        //     this.props.history.push('./Dashboard');
        //   }
        //   else{ 
        //     this.setState({ setincorrectpassword: true}) ;
        //   }
    
    render(){
        return(
            <div id="React-login">
              <h1 className="login-heading">ReactJS</h1>
            <div className="login">
               {this.state.setincorrectpassword?
            <div className="error-message">
               <p>Error: Invalid User Credentials!</p>
            </div>:""} 
            <label className="login-label">User ID</label>
            <input className="login-input" name="username" type="text" placeholder="Enter User ID" onChange={this.handleChange} value={this.state.username} /><br/><br/>
            <label className="login-label">Password</label>
            <input className="login-input" name="password"  type="password" placeholder="Password" onChange={this.handleChange}  value={this.state.password}  /><br/><br/>
            <input type="button" onClick={this.handleSubmit} value="Log In" /><br/><br/>
         </div>
         </div>
        );
}
}









// import React, {Component} from "react";
// import './Login.css';
// import axios from "axios";

// export default class Login extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//             setincorrectpassword: false
//         }; 
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event){
//         this.setState({ 
//             [event.target.name]: event.target.value
//         }) ;
//         console.log(event.target.name);
//     }
//     handleSubmit(event){
//         const { username, password} = this.state;
//         axios
//         .post(
//             "http://localhost:4000/users",
//             {
//                 users:{
//                     username: this.state.username,
//                     password: this.state.password
//                 }
//             },
//             { withCredentials: true}
//         )
//     //     .then(response => {
//     //         console.log("res from login", response);
//     //     })
//     //     .catch(error => {
//     //         console.log("registration error", error);
//     //     });
//     //     event.preventDefault();
//     // }
//         if(this.state.username===""){
//             this.setState({ setincorrectpassword: true}) ;
//           }
//           else if(this.state.username === this.state.password ){
//             this.props.history.push('./Dashboard');
//           }
//           else{ 
//             this.setState({ setincorrectpassword: true}) ;
//           }
//     }
//     render(){
//         return(
//             <div id="React-login">
//               <h1 className="login-heading">ReactJS</h1>
//             <div className="login">
//                {this.state.setincorrectpassword?
//             <div className="error-message">
//                <p>Error: Invalid User Credentials!</p>
//             </div>:""} 
//             <label className="login-label">User ID</label>
//             <input className="login-input" name="username" type="text" placeholder="Enter User ID" onChange={this.handleChange} value={this.state.username} /><br/><br/>
//             <label className="login-label">Password</label>
//             <input className="login-input" name="password"  type="password" placeholder="Password" onChange={this.handleChange}  value={this.state.password}  /><br/><br/>
//             <input type="button" onClick={this.handleSubmit} value="Log In" /><br/><br/>
//          </div>
//          </div>
//         );
// }
// }
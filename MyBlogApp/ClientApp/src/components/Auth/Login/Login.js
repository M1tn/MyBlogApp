import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import classnames from "classnames"
import "./Login.scss";
import { Link } from 'react-router-dom';




import PropTypes from "prop-types";
//import { connect } from "react-redux";
//import get from 'lodash.get';
//import { Redirect } from "react-router-dom";
//import * as loginActions from './reducer';
//import { Redirect, withRouter } from 'react-router-dom';
//import EclipseWidget from "../eclipse";

const propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired
};
const defaultProps = {};

//const MyNavbar = React.lazy(() => import('../../navbar/Navbar'));


 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {

      },
      isLoading: false,
      done: false
    };
  }

//   static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps.loading!==prevState.loading) {
//       return { loading: nextProps.loading };
//    }
//    else return null;
//  }

  setStateByErrors = (name, value) => {
    if (!!this.state.errors[name]) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[name];
        this.setState(
            {
                [name]: value,
                errors
            }
        )
    }
    else {
        this.setState(
            { [name]: value })
    }
}



  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  handleChange = (e) => {
    this.setStateByErrors(e.target.name, e.target.value);
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }


  handleSubmit =  (e) => {   
    e.preventDefault(); 

    const {email, password} = this.state;

    let errors = {};

    if(email === '') errors.email = "Can't be empty!";
    if(password === '') errors.password = "Can't be empty!";
    

    const isValid = Object.keys(errors).length === 0;

    if(isValid) {
      // const{email, password, confirm_password} = this.state;
      const model = {
        Email: email,
        Password: password
      };
      console.log('-----',model);
      this.props.login(model)
        .then((response) => { 
          this.setState({done: true}) 
        })
        .catch((err)=>{
          this.setState({errors: err.data});
        });

    }
    else {
      this.setState({ errors });
  }


  };

  render() {
    const { errors, isLoading } = this.state;
    return (
      <div>
        {/* <MyNavbar/> */}
      
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <FormGroup controlId="email" bsSize="large">
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              className={classnames('form-control', { 'is-invalid': !!errors.email })}
            />
            {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className={classnames('form-control', { 'is-invalid': !!errors.password })}
            />
            {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
          </FormGroup>
          <Button
            block
            bsSize="large"
            //disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>

        <div className="login-help">          
          <p><Link to="/registration">Click here to Registration</Link></p>
        </div>
      </div>
      </div>
    );
  }
}


// const mapState = (state) => {
//   return {
//     loading: get(state, 'login.post.loading'),
//     failed: get(state, 'login.post.failed'),
//     success: get(state, 'login.post.success')
//   }
// }
//   const mapDispatch = {
//     login: (model) => {
//       return loginActions.loginPost(model);
//     }
//   }
// Login.propTypes = propTypes;
// Login.defaultProps = defaultProps;

export default Login;
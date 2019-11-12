import React, { Component,ReactFragment } from 'react';
import "./Registration.scss";
import classnames from "classnames";
import { connect } from 'react-redux';
import axios from "axios";
import PropTypes from 'prop-types';
import {registerUser} from './reducer';
import EclipseWidget from '../../Eclipse';



const propTypes = {
    register: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

class Registration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          first_name:"",
          last_name:"",
          email: "",
          password: "",
          confirm_password:"",
          loading: this.props.loading,
          errors: {

        }        
          
        };

        
      }

      UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('Change props ');
        this.setState({
            loading: nextProps.loading,
            errors: nextProps.errors
        });
    }

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


    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }




      handleSubmit =  (e) => {   
        e.preventDefault(); 
    
        const {email, password, confirm_password} = this.state;
    
        let errors = {};
    
        if(email === '') errors.first_name = "Це поле не може бути порожнім!";

        if(email === '') errors.last_name = "Це поле не може бути порожнім!";
        if(email === '') errors.email = "Це поле не може бути порожнім!";
        if(password === '') errors.password = "Це поле не може бути порожнім!";
        if(password !== confirm_password) errors.confirm_password = "Паролі не співпадають!";
        
    
        const isValid = Object.keys(errors).length === 0;
    
        if(isValid) {
          const{email, password, confirm_password, first_name, last_name} = this.state;
          const model = {
            First_name:first_name,
            Last_name:last_name,
            Email: email,
            Password: password,
            Confirm_password: confirm_password
          };
          console.log('-----',model);
          this.props.register(model)
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
}
    


    




    render() {

        const {email, loading, password, passwordConfirm, errors} = this.state;
        
        return (
            <div class="cotainer">
        <div class="row justify-content-center">
            <div className="col-md-8">
            <div className="card">
                <div className="card-header">Реєстрація</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit} action="" method="">
                    <div className="form-group row">
                                    <label for="first_name" className="col-md-4 col-form-label text-md-right">Ім'я</label>
                                    <div className="col-md-6">
                                        <input type="text" value={this.state.first_name} onChange={this.handleChange} id="first_name" className={classnames('form-control', { 'is-invalid': !!errors.first_name })} name="first_name" />
                                        {!!errors.first_name ? <span className="help-block">{errors.first_name}</span> : ''}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="last_name" className="col-md-4 col-form-label text-md-right">Прізвище</label>
                                    <div className="col-md-6">
                                        <input type="text" value={this.state.last_name} onChange={this.handleChange} id="last_name" className={classnames('form-control', { 'is-invalid': !!errors.last_name })} name="last_name" />
                                        {!!errors.last_name ? <span className="help-block">{errors.last_name}</span> : ''}
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                    <div className="col-md-6">
                                        <input type="email" value={this.state.email} onChange={this.handleChange} id="email_address" className={classnames('form-control', { 'is-invalid': !!errors.email })} name="email" />
                                        {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                                    </div>
                                </div>
    
                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right">Пароль</label>
                                    <div className="col-md-6">
                                        <input type="password" value={this.state.password} onChange={this.handleChange} id="password" className={classnames('form-control', { 'is-invalid': !!errors.password })} name="password" />
                                        {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="confirm_password" className="col-md-4 col-form-label text-md-right">Повторіть пароль</label>
                                    <div className="col-md-6">
                                        <input type="password" value={this.state.confirm_password} onChange={this.handleChange} id="confirm_password" className={classnames('form-control', { 'is-invalid': !!errors.confirm_password })} name="confirm_password" />
                                        {!!errors.confirm_password ? <span className="help-block">{errors.confirm_password}</span> : ''}
                                    </div>
                                </div>
    


    
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                    Реєстрація
                                    </button>
                                    
                                </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    
        );
        
    }    
    
}

const mapState = (state) => {
    return {
        loading: state.register.loading,
        errors: state.register.errors,
    }
}


Registration.propTypes = propTypes;
 
export default connect(mapState, {register: registerUser})(Registration);

        {/* 
        
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Реєстрація</div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} action="" method="">


                            <div className="form-group row">
                                    <label for="first_name" className="col-md-4 col-form-label text-md-right">Ім'я</label>
                                    <div className="col-md-6">
                                        <input type="text" value={this.state.first_name} onChange={this.handleChange} id="first_name" className={classnames('form-control', { 'is-invalid': !!errors.first_name })} name="first_name" />
                                        {!!errors.first_name ? <span className="help-block">{errors.first_name}</span> : ''}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="last_name" className="col-md-4 col-form-label text-md-right">Прізвище</label>
                                    <div className="col-md-6">
                                        <input type="text" value={this.state.last_name} onChange={this.handleChange} id="last_name" className={classnames('form-control', { 'is-invalid': !!errors.last_name })} name="last_name" />
                                        {!!errors.last_name ? <span className="help-block">{errors.last_name}</span> : ''}
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                    <div className="col-md-6">
                                        <input type="email" value={this.state.email} onChange={this.handleChange} id="email_address" className={classnames('form-control', { 'is-invalid': !!errors.email })} name="email" />
                                        {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                                    </div>
                                </div>
    
                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right">Пароль</label>
                                    <div className="col-md-6">
                                        <input type="password" value={this.state.password} onChange={this.handleChange} id="password" className={classnames('form-control', { 'is-invalid': !!errors.password })} name="password" />
                                        {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="confirm_password" className="col-md-4 col-form-label text-md-right">Повторіть пароль</label>
                                    <div className="col-md-6">
                                        <input type="password" value={this.state.confirm_password} onChange={this.handleChange} id="confirm_password" className={classnames('form-control', { 'is-invalid': !!errors.confirm_password })} name="confirm_password" />
                                        {!!errors.confirm_password ? <span className="help-block">{errors.confirm_password}</span> : ''}
                                    </div>
                                </div>
    


    
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                    Реєстрація
                                    </button>
                                    
                                </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>        
        </div>
    
    

    {loading && <EclipseWidget/>} */}


{/* const mapState = (state) =>{
    return {
        loading: state.register.loading,
    }
}

Registration.propTypes = propTypes;
 
export default connect(mapState, {register: registerUser})(Registration); */}


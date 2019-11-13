import React, { Component } from 'react';
import "./Login.scss";
import classnames from "classnames";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUser } from './reducer';
import EclipseWidget from '../../Eclipse';
import { connect } from 'react-redux';



const propTypes = {
    login: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {


            email: "",
            password: "",
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




    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        let errors = {};

        if (email === '') errors.email = "Це поле не може бути порожнім!";
        if (password === '') errors.password = "Це поле не може бути порожнім!";


        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            // const{email, password, confirm_password} = this.state;
            const model = {
                Email: email,
                Password: password
            };
            console.log('-----', model);
            this.props.login(model);
                

        }
        else {
            this.setState({ errors });
        }
    }






    render() {

        const { errors, loading, email, password} = this.state;

        return (
            <>
                <div className="login-form">
                    <div className="cotainer">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Вхід</div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit} action="" method="">
                                            <div className="form-group row">
                                                <label htmlFor="email_address"
                                                    className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                                <div className="col-md-6">
                                                    <input type="email"
                                                        value={email}
                                                        onChange={this.handleChange} id="email_address"
                                                        className={classnames('form-control', { 'is-invalid': !!errors.email })}
                                                        name="email" />
                                                    {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="password"
                                                    className="col-md-4 col-form-label text-md-right">Пароль</label>
                                                <div className="col-md-6">
                                                    <input type="password"
                                                        value={password}
                                                        onChange={this.handleChange}
                                                        id="password"
                                                        className={classnames('form-control', { 'is-invalid': !!errors.password })}
                                                        name="password" />
                                                    {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                                                </div>
                                            </div>



                                            <div className="col-md-6 offset-md-4">

                                                <button type="submit" className="btn btn-primary">
                                                    Вхід
                                    </button>

                                                <a href="#" className="btn btn-link">
                                                    Забув пароль?
                                    </a>

                                                <Link to={'/registration'} className="btn btn-link">
                                                    Реєстрація
                                    </Link>


                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {loading && <EclipseWidget />}

            </>
           
        );
    }
}

const mapState = (state) => {
    return {
        loading: state.login.loading,
        errors: state.login.errors,

    }
}


Login.propTypes = propTypes;


export default connect(mapState, { login: loginUser })(Login);
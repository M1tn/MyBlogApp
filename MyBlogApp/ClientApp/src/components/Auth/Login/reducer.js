import loginService from './loginService';
import update from '../../../helpers/update';
import { push } from 'connected-react-router';
import setAuthorizationToken from '../../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

export const LOGIN_STARTED = "user/LOGIN_STARTED";

export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILED = "user/LOGIN_FAILED";


export const LOGIN_SET_CURRENT_USER = "login/SET_CURRENT_USER";



const initialState = {
    loading: false,
    success: false,
    failed: false,
    errors: {},
    isAuthenticated: false,
    user: {
        id: '',
        name: '',
        //image:'',
        roles: []
    }
}

export const loginReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case LOGIN_STARTED: {
            //console.log('-----Begin register User--------');
            newState = { ...state, loading: true };
            break;
        }
        case LOGIN_SUCCESS: {
            //console.log('-----Success register User--------');
            newState = { ...state, loading: false };
            break;
        }
        case LOGIN_SET_CURRENT_USER: {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        }
        case LOGIN_FAILED: {
            //console.log('-----Filed register User--------');
            newState = {
                ...state,
                loading: false,
                errors: action.servErrors
            };
            break;
        }
        default: {
            return state;
        }
    }
    return newState;
}






export function logout() {
    return dispatch => {
        logoutByJWT(dispatch);
    };
}



export const loginByJWT = (tokens, dispatch) => {
    const { token /*, refToken */} = tokens;
    var user = jwt.decode(token);
    if (!Array.isArray(user.roles)) {
        user.roles = Array.of(user.roles);
    }
    //console.log('Hello app', user);
    localStorage.setItem('jwtToken', token);
    //localStorage.setItem('refreshToken', refToken);
    setAuthorizationToken(token);
    dispatch(loginActions.setCurrentUser(user));
}
export const logoutByJWT = (dispatch) => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    setAuthorizationToken(false);
    dispatch(loginActions.setCurrentUser({}));
}




export const loginActions = {
    started: () => {
        return {
            type: LOGIN_STARTED
        }
    },
    success: () => {
        return {
            type: LOGIN_SUCCESS
        }
    },
    failed: (response) => {
        return {
            type: LOGIN_FAILED,
            errors: response.data
        }
    },
    setCurrentUser: (user) => {
        return {
            type: LOGIN_SET_CURRENT_USER,
            user
        }
    }
}






export const loginUser = (model) => {
    return (dispatch) => {
        dispatch(loginActions.started());
        loginService.loginUser(model)
            .then((response) => {
                //console.log('Server message', response.data);
                dispatch(loginActions.success());
                loginByJWT(response.data, dispatch);
                dispatch(push('/'));
            }, err => {
                dispatch(loginActions.failed());
                console.log('Server problen in controler message', err.response.data);
            })
            .catch(err => {
                console.log('Global Server problen in controler message', err);
            });

    };
}



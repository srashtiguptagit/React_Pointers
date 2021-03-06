import React, {Component} from 'react';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType:'text',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validations: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType:'text',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validations: {
                    required: true
                },
                valid: false,
                touched: false
            }

        },
        isSignUp: true
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    switchLoginHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            };  
        })

    }
    render() {
        return(
            <div>
                <form>
                <Button onClick={this.clickHandler}>SIGNUP</Button>
                <Button onClick={this.switchLoginHandler}>SWITCH TO SIGNIN</Button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth = (email, passowrd) => {dispatch(actionTypes.auth(email, password))}
    }
}

export default connect(null, mapDispatchToProps) (Auth);

// Now since w ehave created new component here lets add this route in our App.js

<Route path="/auth" component={Auth} exact></Route>

//ActionCreaters export file

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';


// Action dispatchers

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
 }

 export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED
    }
 }

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const reqData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
       axios.post('url', reqData).then((res)=>{
           dispatch(authSuccess(res.data));
       }).catch((error) => {
           dispatch(authFailed(error));
       })
    }
}
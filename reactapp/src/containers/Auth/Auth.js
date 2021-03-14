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
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value,
            this.state.isSignUp);
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
        onAuth = (email, passowrd, isSignUp) => {dispatch(actionTypes.auth(email, password, isSignUp))}
    }
}

export default connect(null, mapDispatchToProps) (Auth);

// Now since w ehave created new component here lets add this route in our App.js

<Route path="/auth" component={Auth} exact></Route>

//ActionCreaters export file

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


// Action dispatchers

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        localId: idToken
    }
 }

 export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
 }

 export const authLogout = () => {
     return{
         type: actionTypes.AUTH_LOGOUT
     }
 }

 export const setExpirtationTimeOut = (expirationTime) => {
     return dispatch => {
         return setTimeout(()=> {
             dispatch(authLogout());
         }, expirationTime)

     }
 }

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const reqData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const baseUrl ='gfehgqwfehgwqfehgwqfeghfqwgh';
        if(isSignUp) {
            url  = baseUrl + 'SIGNUP'
        }
        else {
            url = baseUrl + 'SIGNIN'
        }
       axios.post('url', reqData).then((res)=>{
           dispatch(authSuccess(res.data.idToken, res.data.localId));
          dispatch(setExpirtationTimeOut(res.data.expiresIn));
       }).catch((error) => {
           dispatch(authFailed(error));
       })
    }
}

// Step 5: Is to store the  token:

//under reducers => Auth.reducer.js

const initalState = {
    token: null,
    loading: false,
    userId: null,
    error: null

}

const authReducer = (state= initalState, action) =>{
   switch(action.type){
       case('AURH_START'):
       return {
           loading: true
       }
       case('AUTH_SUCCESS'):
       return {
           token: action.tokenId,
           loading: false,
           userId: action.userId,
           error: null
       }
       case('AUTH_FAIL'):
       return {
           error: error
       }
       case('AUTH_LOGOUT'):
       return {
           token: null,
           error: null,
           userId: null
       }
   }
}



// Now suppose I want to have authorized access to some tab eg: Order tab

// Now in that component's action dispatcher before we make a get call we need to add token but that 
// token is in our auth reducer so then how do we acccess that token

//Ordercomponent

const mapstateToProps = state => {
    token: state.auth.token
}

axios.post('http://gdgdg/dhdhdhd?auth=' + token);

// auth because in 
rootReducer = combineRedcuers({
    auth: AuthReducer,
    orders: OrderReducer
}) 

// We cannot connect redux with functional componnets thus in order to manupalate the state
// we should try find closet class based component

// In order to design the logout component
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class logout extends Component {
    componnetDidMount () {
            this.props.onLogoutClicked();
    }
    render() {
        return (
            <Redirect to="/" />
        )
    }
}
    const mapDispatchToProps = dispatch =>{
        return {
            onLogoutClicked = () => dispatch({type: actionTypes.authLogout()})
        }
    }



    // Implementing guards in the application

class Naviagtion extends Component {
    render() {
        let routes = (
            <Switch>
            <Route to="/C" component={ABC} />
            <Route to="/D" component={ABC} />
            </Switch>
        );
        if(this.props.isAuthenticated) {
            routes = (
                <Switch>
                <Route to="/" component={ABC} />
                <Route to="/A" component={ABC} />
                <Route to="/B" component={ABC} />
                </Switch>
            )
        }
        return (
            {routes}
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}




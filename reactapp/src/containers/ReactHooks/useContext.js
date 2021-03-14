import React from 'react';

export const AuthContext = React.createContext({
    isAuthenticated: false,
    login: ()=> {}
});

const AuthAppContext = props => {
    const [authenticated, setAuthentication] = useState(false);

loginHandler = () => {
    setAuthentication(true);
}
    return (
        <AuthContext.Provider value={{
            isAuthenticated: authenticated,
            login: login
        }}>
            {props.childern}
        </AuthContext.Provider>

    )
}


//for class based components its easy we can use this context as

import AuthContext from '';

<AuthContext.Consumer>
    {(context) => {}}

</AuthContext.Consumer>

// 2nd way is 
//static contextType = AuthContext;

//use these as this.context.authenticated


// But for functional components

import {AuthContext} from './';

const authContext = useContexxt(AuthCOntext);
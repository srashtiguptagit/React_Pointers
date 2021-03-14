// UseReducers give the component level state managemnet control. It takes the current state and updates the state a well.
import {useReducer, useEffect, useCallback} from 'react';

const personReducer = (state, action) => {
    switch(action.type) {
        case('ADD'):
        return {
            //action.name
    }
    case('DELETE'):
    return {
        // something action.id
    }
}
}
// 2nd argument here is not the method that manupalates the state its the dispatch method which dispatches actions to the reducer
const mainCompoennet = (props) => {
    const [state, dispatch] = useReducer(personReducer, [])
    return (

        componentDidUpdate = () => {
            dispatch({type: 'ADD', name: name}); 
        }

    )
}

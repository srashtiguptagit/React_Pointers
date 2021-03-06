export const add=(value) => {
    return {
        type: 'DECREMENT'
    }
}

export const subtract = (value) => {
    return {
        type: 'SUBTRACT'
    }
}

export const storeResult = (res) => {
    return {
        type: 'STORE-RESULT',
        result: res
    }
}

// Now when we have to use them in component dispatchers
import * as actionCreators from './Actioncreators.js';
const mapDispatch = dispatch =>{
    return {
        onAddClicked = () => dispatch({type: actionCreators.add(10)}),
        onSubtractClicked = () => dispatch({type: actionCreators.subtract(20)})
    }
}


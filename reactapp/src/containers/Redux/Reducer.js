const initalState = {
    counter:0
}

const rootReducer = (state=initalState, action) => {

  if(action.type === 'INC'){
      return {
          counter: this.state.counter + 1
      }
  }
  if(action.type === 'ADD'){
    return {
        counter: this.state.counter + 3
    }
}
return state;
}

export default rootReducer;

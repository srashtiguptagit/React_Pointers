import React, {Component} from 'react';

class Persons extends Component {
    nameChangeHandler = (event) => {
        this.setState({
            Persons: [{
                name: event.target.value
            }]
        })
    }
    render(){
        return(
            <Person nameChanged={this.nameChangeHandler}/>
        )
    }
}
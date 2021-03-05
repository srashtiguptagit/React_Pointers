import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';

class Persons extends Component {
    render() {
        componentDidMount = () => {    // => Since this method works post render so the last input element would be set
            this.inputElement.focus();
        }
        return (
            <Aux>
                <input ref="(inputEl) => {this.inputElement = inputEl}" /> 
            </Aux>
        )
    }
}


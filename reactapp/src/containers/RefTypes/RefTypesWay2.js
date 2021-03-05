import React, {Component} from 'react';

class Persons extends Component {
    constructor() {
        super(props);
        this.elementRef = React.createRef();
    }

    componentDidMount() {
        ths.elementRef.current.focus();
    }
    render(){
        return(
            <input ref={this.elementRef} />
        )
    }
}
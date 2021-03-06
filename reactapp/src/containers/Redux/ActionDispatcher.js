import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActionDisatcher extends Component {
    state= {
        counter: 0
    }
    render() {

        return(
            <div></div>
        )
    }
}
const mapStateToProps= state => {
    cntl: this.state.counter

}

const mapDispatchToProps = dispatch => {
    return {
        onClick:()=> dispatch({type:'ADD'})
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(ActionDisatcher);
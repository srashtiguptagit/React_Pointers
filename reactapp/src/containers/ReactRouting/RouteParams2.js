import React, {Component} from 'react';
import { Route} from 'react-router-dom';

class ABC extends Component {
    render(){
        clickHandler = (id) => {
            this.props.history.push({pathname: '/' +id});
            this.props.history.replace({pathname: '/'+ id});
        }
        return(
            <div>
                <Route path='/:id' component={posts} />
                <p onClick={() => this.clickHandler(props.id)}></p>
            </div>
        )
    }
}
//
import { Component } from 'react';
import {withRouter} from 'react-router-dom';

class abc extends Component {
    render(){
        return(
            <div></div>
        )
    }
}

export default withRouter(abc);

// Wiith this HOC we can share the route props and make the components route aware
// by route params i mean the match. history and location access
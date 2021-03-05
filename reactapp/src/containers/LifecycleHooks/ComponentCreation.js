import React, {Component} from 'react';

class app extends Component {
    constructor(props){     // 1st lifecycle hook together with props initalization 
                               // here we can initalize the state as well
    super(props);
        state: {
            persons:[{
                name:'Srashti', age: 31
            },
            {name: 'Miraya', age: 3}]
        }
    }

    static getDerivedStateFromProps (props, state) {     // => 2nd lifecylce hook
        return state;
    }

    componentDidMount(){               //  => 5th lifecycle hooks
        // Placeholder for http calls
    }
    render(){                        //    => 3rd lifecycle hooks
        return(
            <Person></Person>       //=> 4th All child components are rendered
        )
    }
}
class Persons extends Component {
    static getDerivedStateFromProps(state, props) {    // => 1st lifecycle hook
        return props;
    }

    shouldComponentUdate(nextProps, nextState){       // => 2nd lifecycle hook
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {    // => 3rd lifecyle hook
    }

    componentDidUpdate(prevState, prevProps, snapshot) {   // => 4th lifecycle hook
        //Placeholder for http calls
    }

    render(){
        return(
            <div>
                <p>I am {this.props.name} and I am {this.props.age}</p>
            </div>
        )
    }
}
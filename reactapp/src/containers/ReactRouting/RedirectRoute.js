import { Route, Link, Redirect } from 'react-router-dom';

class abc extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/new-posts" exact component={abc} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        )
    }
}
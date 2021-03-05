// Implementation 1

import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

class Persons extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home2</h1>} />

                <Route path="/" exact component={Posts} />
                <Route path="/" exact component={ABC} />

                <Link to="/">Home</Link>
                <Link to={{
                    pathName: "/new-posts",
                    hash: "#submit"
                }}> New Posts </Link>
            </div>
        )
    }

}

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
                <Route path="/abc" exact component={ABC} />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{
                        pathName: "/new-posts",
                        hash: "#submit",
                        search:'?quick-search=true'
                    }}> New Posts </Link></li>
                </ul>

            </div>
        )
    }

}

// Search helps to put the query params with the url
// With Link we are not reloading the application and just re-renders the page so that
// there is no loss of data

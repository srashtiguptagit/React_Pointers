// Implementation 1

import { Route, NavLink } from 'react-router-dom';
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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to={{
                        pathName: "/new-posts",
                        hash: "#submit",
                        search:'?quick-search=true'
                    }} activeClassName="my-activeClass"> New Posts </NavLink></li>
                </ul>

            </div>
        )
    }

}

// With Navlink we tell the react router that we need to enable the active class css here.
// even if we dont add active class css react router will automativ\cally have it.

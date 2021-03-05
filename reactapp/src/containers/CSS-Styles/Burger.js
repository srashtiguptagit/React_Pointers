
import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';

class Burger extends Component {

    render() {
        const style = {
            backgroundColor: 'blue',
            fontSize: '10px'

        }
        const classes = [];
        if (this.state.persons.length > 0) {
            classes.push('red');
        }
        if (this.state.persons.length > 1) {
            classes.push('bold');
        }


        return (
            <div style={style} style={{ backgroundColor: 'red' }}>
                <div className={classes.join(' ')}></div>

            </div>

        )
    }

}

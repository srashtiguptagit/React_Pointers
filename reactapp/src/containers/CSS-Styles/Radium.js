import Radium, { styleRoot } from 'radium';
import React, { Component } from 'react';

class RadiumNew extends Component {
    render() {
        const style = {
            backgroundColor: 'red',
            ':hover': {                          // With Radium we can then enclose our pseudo seletors in ''
                backgroundColor: 'pink',
                color: 'black'
            },
            '@media(min-width: 500px)': {
                width: '30px'
            }
        }

        return (
            <styleRoot>
                <div style={style}></div>
            </styleRoot>
        )
    }
}
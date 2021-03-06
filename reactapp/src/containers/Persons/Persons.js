// Class based component

import React, { Component } from 'react';
import classes from './Persons.css';

class Persons extends Component {
    //state is always an object and can be used only for class based components
    state = {
        persons: [
            {
                name: 'Srashti', age: 31
            },
            {
                name: 'Miraya', age: 3
            }
        ],
        showPerson: false
    }
    clickHandler = () => {
        console.log('I got clicked');

    }

    render() {
        let showPerson = null;
        if(this.state.showPerson) {
            showPerson = this.state.persons.map((per) => {
                <Person name={per.name} age={per.age}/>
            })
        }
        return (
            <div className={classes.Persons}>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                    click={this.clickHandler.bind(this, "Mirri")} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                {showPerson}
                <Button onClick={this.clickHandler.bind(this, "Mac")}></Button>
                <Button onClick={() => {this.clickHandler('Srashti')}}></Button>
            </div>
        )
    }
}
export default Persons;
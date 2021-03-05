// This is a functional component
// These are the functional components . Till React 16.8 it was not possible to maintain state in 
// functional components now its possible with React hooks
import React, {useState} from 'react';

const Person = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
     //As state in class based componensts has to be objcets here it can be anything
    return (
        <div>
            <p>My name is {props.name} and I am {props.age} years old</p>
            <p>My name is {props.name} and I am {props.age} years old</p>
            <input onChange={props.nameChanged}/>
            <input type="text" value={enteredTitle} onChnage={event => {setEnteredTitle(event.target.value)}}/>
            <input type="text" value={enteredAmount} onChnage={event => {setEnteredAmount(event.target.value)}}/>
        </div>
    )
}

export default Person;


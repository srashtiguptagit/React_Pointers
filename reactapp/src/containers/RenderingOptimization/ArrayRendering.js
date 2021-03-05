import React, {Component} from 'react';


class App extends Component{
    render() {
        return [
        <p key="key1">Hi There</p>,
        <p key="key2">My Name is Srashti</p>,
        <div key="key3">These are json elements</div>
        ];
    }
}

export default App;
// While returning an array one important point is that we should have a key for al the child elements inside array.

// npm install --save prop-types

import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        return(
            <Aux>
                <p></p>
                <p></p>
                <p></p>
            </Aux>
        )
    }
}
// With PropTypes we can maintain list of types of prototypes

Person.propTypes = {
    click: PropTypes.fusnc,
    name: PropTypes.string,
    age: PropTypes.number
}
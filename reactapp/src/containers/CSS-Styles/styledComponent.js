//npm install --save styled-component
import styled from 'styed-component';

class StyledComponent extends Component {

    render() {
        const StyledDiv = styled.div`      ======> These are called tagged templates where a react component is returned
            backgroundColor: 'blue',
            font-size: '14px',
            width: '100px',
    `

        const StyledButton = styled.button`
        background-color: blue;
        width: 100px;
        &:hover {
            background-color: pink;
            width: 50px;
        }`
        return (
            <div>
                <StyledDiv>
                    <p>Hi There</p>
                </StyledDiv>
                <StyledButton></StyledButton>
            </div>

        )
    }
}
export default StyledComponent;
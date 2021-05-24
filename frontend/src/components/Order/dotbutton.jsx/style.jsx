import styled from 'styled-components'

const DotButton = styled.button`
    margin: 10px 0;
    float: right;
    background-color: transparent;
    border: none;
    .dot{
            border-radius: 50% 50% 50% 50%;
            margin:3px;
            background-color: white;
            width: 3px; height: 3px;
            display: block;
    }
    :hover{
        background-color: rgba( 205, 205, 205, 0.6 );
        border-radius: 40% 40% 40% 40%;
    }
`

export default DotButton;
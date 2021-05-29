import styled from 'styled-components'

const OrderProcess = styled.div `
    height: auto;
    padding: 0.5em 0;
    text-align: center; 
    clear:both;
    display: block;
    background-color: white;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 3px 3px #dcdcdc;
    
    p{
        color: rgb(51, 51, 51);
        font-size: 0.8em;
        padding: 0.5em 0;
        font-weight: bold;
    }
    .processtext{
        width: 70%;
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin: 0.5em auto;
        .text{
            margin: 10px;
        }
    }
}
`

export default OrderProcess;
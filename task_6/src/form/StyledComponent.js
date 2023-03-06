import styled from "styled-components"


const Container = styled.div`

     width: 600px;
     height: 400px;
     background-color:aqua;
     margin: 100px auto;

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 100px;
`;

const Label = styled.label`
    font-size: 20px;
    font-family: sans-serif;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Input = styled.input`
     width: 400px;
     height: 40px;
     outline: none;
     padding-left: 20px;
`




export {Container, Content, Input, Label}
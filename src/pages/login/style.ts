import styled from "styled-components";

export const border = '.5px solid #999'

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
`
export const LoginForm= styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;


    width: 350px;
    border: ${ border };
    height: 50vh;

    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    h1{
        padding: 20px;
    }
    button {
        padding: 13px;
        border: .5px solid red;
        color: red;
        background: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    input{
        padding: 20px;
        border: ${border} ;
    }

    a{
        color: blue;
    }
`
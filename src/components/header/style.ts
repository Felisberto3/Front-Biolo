import styled from "styled-components"

export const  HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 25px 50px;
    justify-content: space-between;
    box-shadow: 2px 1px 3px #000;
    position: fixed;
    width: 98.5vw;
    z-index: 9;
    background: #fff;
    top: 0;

    a{
        display: flex;
        align-items: center;
    }
    img{
        width: 25px;
    }
`

export const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;

    li{
        cursor: pointer;
    }
`

export const InputHeader = styled.div`
    border: 1px solid #999;
    width: 35%;
    padding:8px 20px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        padding:  5px 10px;
        font-size: 15px;
    }

`
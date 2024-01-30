import styled from "styled-components";

export const RightSide = styled.div`
    width: 30vw;
    background: #474779;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .img{
        text-align: center;
    }
    h1,h3,h4{
        color: #fff;
    }
    img{
        width: 250px;
        border-radius: 50%;
    }

    p{
        color: #fff;
        padding: 20px;
        text-indent: 10px;
        font-size: 20px;
    }
`

export const UserDatas = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;


    span {
        display: flex;
        padding: 10px ;
        background: #e96f6f;
        border-radius: 5px;
    }
`
export const LeftSide = styled.div`
    flex-grow: 1;
    max-height: 100vh;
    scroll-behavior: smooth;
    overflow-y: scroll;
    hr{
        background: #999;
        width: 100%;
        height: 1px;

    }
    div.header{
        padding: 30px;
    }
    h1{
        text-align: center;
    }
`
export const PerfilContainer = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    height: 100vh;

`



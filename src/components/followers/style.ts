import styled from "styled-components";

export const FollowerContainer = styled.div`
    span{
        cursor: pointer;
    }
`
interface followerProps {
    isfollowerListOn: boolean
}
export const FollowerList = styled.ul<followerProps>`
    position: absolute;
    display: ${(props)=> props.isfollowerListOn? 'block' :'none'}   ;
    z-index: 8;
    h1{
        display: flex;
        justify-content: space-between;
        padding:  10px;
        font-size: 15px;
        font-weight: 500;

    }

    span{
        cursor: pointer;
    }
`
import styled from "styled-components";

interface ContainerbuttonProps {
    islogado: boolean
}
export const ContratoButton = styled.div<ContainerbuttonProps>`
    padding:10px  20px;
    width: 80%;
    text-align: center;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid red;
    color: red;
    transition: all ease .3s;
    &:hover{
        color: #fff; 
        background: red;
        cursor: ${(props)=> props.islogado ? 'pointer' : 'not-allowed'};
    }
`
export const BioloDisplayContainer = styled.ul`
    padding: 30px 20px;

    @media screen and (min-width: 309px) {
        &{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
    }
    @media screen and (min-width: 567px) {
        &{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
    @media screen and (min-width: 643px) {
        &{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    
`

export const Card = styled.li`
    /* height: 45vh; */
    padding: 10px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding: 20px;
    box-shadow: 2px 1.5px 2px 2px #999;
    img {
        width: 80%;
        height: 70%;
    }

    @media screen and (min-width: 309px) {
        &{
            width: 90%;
        }
    }

    @media screen and (min-width: 480px) {
        &{
            width: 70%;
        }
    }
    @media screen and (min-width: 567px) {
        &{
            width: 450px;
        }
    }

    @media screen and (min-width: 663px) {
        &{
            width: 300px;
        }
    }

    
    @media screen and (min-width: 571px) {
        &{
            width: 350px;
        }
    }
`




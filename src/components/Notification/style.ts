import styled from "styled-components";

export const NotificationContainer = styled.li`
    /* position: relative; */
    @media screen and (min-width:383px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 90vw;
        }
    }
    @media screen and (min-width:453px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 80vw;
        }
    }

    @media screen and (min-width:500px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 70vw;
        }
    }
    @media screen and (min-width:600px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 60vw;
        }
    }
    @media screen and (min-width:650px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 50vw;
        }
    }
    @media screen and (min-width:700px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 45vw;
        }
    }
    @media screen and (min-width:800px) {
        .notificationContainer{
            position: relative;
        }
        .notificationList {
            width: 40vw;
        }
    }
`
type NotificationListProps = {
    isOn:boolean
}
export const NotificationList = styled.ul<NotificationListProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    background: red;
    height: 100vh;
    padding: 20px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    display: ${(props)=> props.isOn ? 'flex' : 'none' };
    z-index: 9;


    .NotificationHeader{
        display: flex;
        justify-content: space-between;
        padding:5px 20px;
        border-bottom: 1px solid #000;
        margin-bottom: 10px;
    }

    @media screen and (min-width:169px) {
        &{
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
        }
    }
    
    @media screen and (min-width:203px) {
        &{
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
        }
    }
    @media screen and (min-width:227px) {
        &{
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
        }
    }

    @media screen and (min-width:383px) {
        &{
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
        }
    }

    /* @media screen and (min-width:383px) {
        &{
            background: blue;
            height: 100vh;
        }
    } */


    

    
    
`
import { useState } from "react"
import { NotificationList,NotificationContainer } from "./style"

export const Notification = () => {
    const [isNotificationOn, setIsNotificationOn] = useState<boolean>(false)

    const showOrHideNotification = () => {
        setIsNotificationOn(!isNotificationOn)
    }
    return (
        <NotificationContainer  >
            <span onClick={ showOrHideNotification } > Notification </span>

            <NotificationList 
                className="notificationList"
                isOn= { isNotificationOn}
            >
                <li className="NotificationHeader">
                    <span>Notificações</span>
                    <span onClick={ showOrHideNotification } >X</span>
                </li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
                <li>kwennlkfnewlkwenll  klnlknelwknew  12:30min</li>
            </NotificationList>
        </NotificationContainer>
    )
}
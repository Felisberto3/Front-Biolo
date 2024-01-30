import { Link } from "react-router-dom"
import { FollowerContainer,FollowerList } from "./style"
import { useState } from "react"

export const Followers = () => {
    const [ isfollowerListOn, setIsfollowerListOn ] = useState(false)
    const showFollowers = () => {
        setIsfollowerListOn(!isfollowerListOn)
    }
    return(
        <FollowerContainer>
        <span onClick={ showFollowers }>Seguidores</span>
        <FollowerList isfollowerListOn = { isfollowerListOn }>
            <h1> 
                <span> Segudores</span>
                <span onClick={ showFollowers } > X</span>
            </h1>

            <hr />
            <li>
                <Link to={'/perfil'}>
                    <img src="../../../public/iggreja.jpg" alt="" />
                    <div>
                        <span>Felix Domingos </span>
                        <h5>Sofware Developer</h5>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/perfil'}>
                    <img src="../../../public/iggreja.jpg" alt="" />
                    <div>
                        <span>Felix Domingos </span>
                        <h5>Sofware Developer</h5>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={'/perfil'}>
                    <img src="../../../public/iggreja.jpg" alt="" />
                    <div>
                        <span>Felix Domingos </span>
                        <h5>Sofware Developer</h5>
                    </div>
                </Link>
            </li>
        </FollowerList>
    </FollowerContainer>
    )
}
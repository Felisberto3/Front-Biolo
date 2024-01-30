import { Link } from "react-router-dom"
import { Notification } from "../Notification"
import { BioloLogo } from "../bioloLogo"
import { HeaderContainer, HeaderList, InputHeader } from "./style"
import { Followers } from "../followers"

export const Header = () => {
    const isLoged = true
    return (
        <HeaderContainer>
            <BioloLogo />

            <InputHeader>
                <input type="text" placeholder="Pesquise qualquer coisa" />
                <i>X</i>
            </InputHeader>

            {
                isLoged ?
                    <HeaderList>
                        <Notification />
                        <Followers/>
                        <Link to={'/perfil'}>
                            <img src="../../../public/iggreja.jpg" alt="" />
                        </Link>

                    </HeaderList>
                    :
                    <HeaderList>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/signup'}>Sign In</Link></li>
                    </HeaderList>
            }
        </HeaderContainer>
    )
}
import { Link } from "react-router-dom"
import { FormSigUp } from "./style"

export const SignUp = () => {
    return(
       <FormSigUp action="">
        <h1>Sign Up</h1>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="palavra passe" />
        <input type="password" placeholder="Confirmar a palavra passe" />
        <button> enviar</button>
        <p> Fazer <Link to={'/login'}> Login</Link></p>
       </FormSigUp>
    )
}
import { Link } from "react-router-dom"
import { LoginForm, LoginContainer } from "./style"
import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleValue = (e: any) => {
        if (e.target.type === 'email') {
            setEmail(e.target.value);

            return
        }

        if (e.target.type==='password') {
            setPassword(e.target.value)
            
        }
    }

    async function submiting(e:any) {
        e.preventDefault()
        if (!email || !password) {
            alert('email or password empty')

            return
        }

        console.log({email,password});
        



        try {
            const response = await fetch('http://localhost:4000/auth', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': "application/json"
                }
            })

            const data= await response.json()

            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoginContainer>
            <LoginForm action="" onSubmit={ submiting }>
                <h1>Login</h1>
                <input type="email" placeholder="Email" onChange={handleValue} />
                <input type="password" placeholder="Palavra Passe" onChange={handleValue}/>
                <button type="submit" > enviar</button>
                <p>Tens conta neste site? <Link to={'/signup'}>Criar conta</Link></p>
            </LoginForm>
        </LoginContainer>
    )
}
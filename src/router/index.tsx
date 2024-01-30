import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { SignUp } from "../pages/sigUp"
import { Perfil } from "../pages/perfil"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route path="/" element={ <Home/>}/>
                    <Route path="/login" element={ <Login/>}/>
                    <Route path="/signup" element={ <SignUp/>}/>
                    <Route path="/perfil" element={ <Perfil/>}/>
                    <Route path="*" element={ <>Error 404, PAGE NOT FOUND!!!!!!!!</>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Routing }
import { Link } from "react-router-dom"
import { PostBioloForm } from "./style"
import { BioloDisplay } from "../../components/biolosDisplay"
import { Header } from "../../components/header"

const Home = () => {
    return (
        <>
            <Header />
            <Link to={'/login'}>
                <PostBioloForm>
                    <input
                        type="text"
                        placeholder="Publique o seu Biolo"
                    />
                    <button>Enviar</button>
                </PostBioloForm>
            </Link>
            <BioloDisplay />
        </>
    )
}

export { Home }
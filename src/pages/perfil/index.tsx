import { BioloDisplay } from "../../components/biolosDisplay"
import { LeftSide, PerfilContainer, RightSide,UserDatas } from "./style"

export const Perfil = () => {
    return (
        <PerfilContainer>
           <RightSide>
                <div className="img">
                    <img src="../../../public/iggreja.jpg" alt="" />
                </div>
                <h1>Felisberto Alberto</h1>
                <h3>Software Engineer</h3>
                <h4>felisbertoalberto@gmail.com</h4>
                <UserDatas>
                    <span>Seguidores: <b>121</b></span>
                    <span>Seguindo: <b>200</b></span>
                    <span>Biolos: <b>29</b></span>
                </UserDatas>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                     natus ratione aspernatur vero est aliquam libero optio. 
                    Ea, delectus, fuga accusamus sit ex placeat, veritatis voluptates minima iusto ipsa voluptas.
                </p>
           </RightSide>
           <LeftSide>
                <div className="header">
                <h1>Meus biolos</h1>
                </div>
                <hr/>
                <BioloDisplay/>
           </LeftSide>
        </PerfilContainer>
    )
}
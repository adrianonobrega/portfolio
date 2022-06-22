import { Tudo } from "./styles"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"




const Footer = () => {

    return(
        <Tudo>

     

            <a href="https://www.linkedin.com/in/adriano-n%C3%B3brega-05502516a/" target="_blank"><img src={linkedin}></img></a>
            <h3>Construido por Adriano Nóbrega Costa - 2022 - Todos os direitos reservados</h3>
            <a href="https://github.com/adrianonobrega" target="_blank"><img src={github}></img></a>
            
        </Tudo>
    )
}


export default Footer
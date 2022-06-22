
import { Tudo,Lista,Pag,Sobre,Tecnologias,Qualificacao,Projetos,Contato,Video,Titulos,Tec,Sobre2} from "./styles"
import { Link, animateScroll as scroll } from "react-scroll";
import NavBar from "../../components/NavBar";
import SectionCaroulsel from "../../components/Caroulsel";
import torre from "../../assets/torre_de_hanoi.gif"
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useState } from "react";
import kenzieHub from "../../assets/gifKenzieHub.gif"
import hamburgueria from "../../assets/gifHamburgueria.gif"
import games from "../../assets/infoGames.gif"
import fundo from "../../assets/fundo.mp4"
import adriano from "../../assets/adriano.jpeg"
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Tecnologia from "../../components/Tecnologia";
import frondEnd from "../../assets/frondEnd.jpg"
import backend from "../../assets/backend.jpg"



const info = [{
    id:1,
    img:`${torre}`,
    title:"Torre de Hanoi",
    text:"Jogo famoso chamado Torre de Hanoi, desenvolvido para um trabalho individual no curso de desenvolvimento FullStack na Kenzie Academy Brasil. Projeto desenvolvido em HTML,CSS e Vanilla(Javascript puro).",
    tecnologia1:"Vanilla",
    tecnologia2:"CSS",
    tecnologia3:"HTML",
    urlRepo:"https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-adrianonobrega",
    urlVercel:"https://torre-de-hanoi-fundo.vercel.app/"
   },{
    id:2,
    img:`${hamburgueria}`,
    title:"Hamburgueria",
    text:"Projeto desenvolvido para um trabalho individual no curso de desenvolvimento FullStack na Kenzie Academy Brasil, onde tive que simular um site de fazer pedidos em uma hamburgueria.",
    tecnologia1:"React-js",
    tecnologia2:"CSS",
    tecnologia3:"",
    urlRepo:"https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-adrianonobrega",
    urlVercel:"https://react-entrega-s1-hamburgueria-da-kenzie-adrianonobrega.vercel.app/"
   },
   {
    id:3,
    img:`${kenzieHub}`,
    title:"KenzieHub",
    text:"Projeto desenvolvido para um trabalho individual no curso de desenvolvimento FullStack na Kenzie Academy Brasil, onde tive que simular um site para guardar as tecnologias aprendidas. ",
    tecnologia1:"React-js",
    tecnologia2:"CSS",
    tecnologia3:"",
    urlRepo:"https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-adrianonobrega",
    urlVercel:"https://react-entrega-s2-kenzie-hub-adrianonobrega.vercel.app/"
   },
   {
    id:4,
    img:`${games}`,
    title:"InfoGames",
    text:"Projeto desenvolvido para um trabalho individual no curso de desenvolvimento FullStack na Kenzie Academy Brasil, onde tive que simular um site de loja que vende jogos de video game, ficou bem basico, mas estou trabalhando para fazer um site mais parecido com a nossa realidade.",
    tecnologia1:"React-js",
    tecnologia2:"CSS",
    tecnologia3:"",
    urlRepo:"https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-adrianonobrega",
    urlVercel:"https://react-entrega-s3-kenzieshop-adrianonobrega.vercel.app/"
   }

]

const Portfolio = () => {
    const [modalOn,setModalOn] = useState(false)
    const [tecnologias,setTecnologias] = useState([])

    function handleClick(id){
        const buscando = info.find((item) => item.id === id)
      setTecnologias([buscando])
setModalOn(true)
}



return (
    <div>
 <NavBar/>
        <Tudo>



<Pag>
<Sobre id="sobre">


<Titulos>Sobre mim</Titulos>
<Sobre2>
<img src={adriano}/>
<h1>Adriano Nóbrega Costa</h1>

<p> Apaixonado por tecnologia, meu primeiro contato foi com uns 13 anos e com 15 anos procurei aprender como funcionavam as máquinas, e por oportunidades que a vida me deu, acabei migrando para outras áreas, mas agora estou de volta na área que eu sempre amei e mais dedicado do que nunca em aprender novas tecnologias. </p>
</Sobre2>


</Sobre>
<Titulos>Tecnologias</Titulos>
<Tecnologias id="tecnologia">
<Tec>
<Tecnologia img={frondEnd}  title="Front-End" tec1="HTML5" tec2="CSS3" tec3="Javascript" tec4="ReactJS"/>
<Tecnologia img={backend}  title="Back-End" tec1="NodeJS"/>
</Tec>


</Tecnologias>
<Titulos>Qualificação</Titulos>
<Qualificacao id="qualificações"><SectionCaroulsel/></Qualificacao>
<Titulos>Projetos</Titulos>
<Projetos id="projetos">

{info.map((item) => (  
   
    
        <Button handleClick={handleClick} item={item}/>
      

     
      
    
)

)}
{modalOn === true && <Modal tecnologias={tecnologias}  info={info}  setModalOn={setModalOn} />}

</Projetos>
<Titulos>Contato</Titulos>
<Contato id="contato">

<Form></Form>

</Contato>
</Pag>
<Footer/>
</Tudo>  
<Video autoPlay loop muted  >

<source src={fundo} type="video/mp4"></source>
</Video>

    </div>
   
    )
}

export default Portfolio
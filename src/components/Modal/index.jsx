import { ModalStyled,Button } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"

const Modal = ({tecnologias,modal,info,setModalOn}) => {
   


function closeModal(){
   
  setModalOn(false)
   
}

    return(
        
       <ModalStyled>
        {tecnologias.map((item) => (
            <div>
                <img src={item.img}/>
                <button onClick={closeModal}>X</button>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <section>
                <h3>{item.tecnologia1}</h3>
<h3>{item.tecnologia2}</h3>
<h3>{item.tecnologia3}</h3>
                </section>

<section>
<Button>
<a href={item.urlRepo} target="_blank">Repositório</a>
</Button>

<a href={item.urlVercel} target="_blank">Visitar</a>
</section>










            </div>
        ))}
       
       </ModalStyled>
       
        

    )
}

export default Modal
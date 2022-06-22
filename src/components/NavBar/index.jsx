import { Lista,Tudo,Nome,Menu,Nav } from "./styles"

const NavBar = () => {

    return (
<Tudo>
   <Nav>
   <Nome>Dev Adriano Nóbrega</Nome>
<div>
<Menu></Menu>
<Menu></Menu>
<Menu></Menu>
</div>


    <Lista>
 
 <li><a href="#sobre">Sobre</a></li>
<li><a href="#tecnologia">Tecnologias</a></li>
<li><a href="#qualificações">Qualificações</a></li>
 <li><a href="#projetos">Projetos</a></li>
<li><a href="#contato">Contato</a></li>
</Lista>
   </Nav>
   


   

</Tudo>
       
    )
}

export default NavBar
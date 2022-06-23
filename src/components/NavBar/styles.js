import styled from "styled-components"


export const Tudo = styled.header`

   a{
    
   }

    
`

export const Nav = styled.nav `
display:flex;
justify-content: space-around;
background-color:#222;
padding:1em;
position:fixed;
width:100%;
z-index:100;

@media (max-width: 685px) {
   
    margin-left:-30px;


}


`

export const Menu = styled.div` `



export const Nome = styled.a `

font-size:20px;
color:white;
@media (max-width: 685px) {
   
display:none;

}

`

export const Lista = styled.ul `
display:flex;
list-style:none;


li{
    margin-right:1em;
    
    
}

a{
    text-decoration:none;
    color:white;
}
a:hover{
    color:red;

}

`
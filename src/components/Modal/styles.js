import styled from 'styled-components';

export const ModalStyled = styled.section`
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,110,99,0.7511379551820728) 4%, rgba(149,147,147,1) 29%, rgba(185,194,196,1) 99%);
position:absolute;
border-radius:15px;
width:800px;
height:340px;
margin-top:250px;

@media (max-width: 820px) {
    width:500px;         
    
    }

h1{
    font-size:25px;
    margin-top:20px;
    margin-left:510px;
    color:red;
    @media (max-width: 820px) {
              margin-left:250px;
        
    }
}

h3{
    @media (max-width: 820px) {
        margin-top:5px;
        
    
        
        }
}
p{
    font-family:'Inter';
    
}
section{
    display:flex;
    justify-content:space-around;
}



a {
    text-decoration:none;
   color:white;
  margin-right:65px;
  margin-top:20px;
  background:black;
padding:7px;
  text-align:center;
  border-radius:8px;
  @media (max-width: 820px) {
    margin-top:10px;
    

    
    }
  
    
}
a:hover{
    color:red;
   
}
button{
   width:20px;
   height:20px;
   float:right;
   position:relative;
   bottom:20px;
   border:0px;
   

}

img{
    width:400px;
    height: 300px;
    float:left;
    margin-left:15px;
    border-radius:8px;
    margin-right:10px;

    @media (max-width: 820px) {
        width:200px;
        height:200px;         
        
        }
}



`
export const Button = styled.section`

margin-right:-95px;

`
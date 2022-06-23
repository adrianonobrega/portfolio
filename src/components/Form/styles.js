import styled from 'styled-components';

export const FormStyle = styled.section`


form{
    display:grid;
    width:500px;
    background:red;
    margin:0 auto;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,110,99,0.7511379551820728) 4%, rgba(149,147,147,1) 29%, rgba(185,194,196,1) 99%);
   border-radius:20px;
   height:500px;
   margin-top:20px;

   @media (max-width: 685px) {
   width:300px;
      margin-left:5px;
      }
}

input{
    width:300px;
    margin:10px auto;
    border-radius:20px;
    padding:8px;
    border:1px solid red;
    
    @media (max-width: 685px) {
        width:200px;
           
           }
    
}
textarea{
    width:300px;
    margin:0 auto;
    border-radius:8px;
    border:1px solid red;

    @media (max-width: 685px) {
        width:200px;
           
           }
}
button{
    width:150px;
    margin:0 auto;
    margin-top:20px;
    padding:10px;
    border-radius:8px;
    margin-bottom:10px;
    border:1px solid red;
    cursor:pointer;
}
button:hover{
    background:red;
    color:white;
}
`
import styled from "styled-components"


export const TecnologiasStyles = styled.section`
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,110,99,0.7511379551820728) 4%, rgba(149,147,147,1) 29%, rgba(185,194,196,1) 99%);
width:500px;
margin:0 auto;
text-align:center;
margin-top:40px;
border-radius:20px;

@media (max-width: 1000px) {
    width:400px;
    
    }
    @media (max-width: 850px) {
        width:300px;
        
        }
        @media (max-width: 650px) {
            // width:150px;         
            margin-left:-10px;
            margin-right:20px;
            }

h1{
    font-size:25px;
}
h3{
    font-size:18px;
    font-weight:normal;
}
img{
    width:200px;
    height:100px;
    border-radius:8px;
    margin-top:10px;

    @media (max-width: 650px) {
        width:100px;         
        
        }

}

`
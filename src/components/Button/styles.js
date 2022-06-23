import styled from 'styled-components';

export const ButtonStyled = styled.button`

    gap: 10px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,110,99,0.7511379551820728) 4%, rgba(149,147,147,1) 29%, rgba(185,194,196,1) 99%);
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, 1, 0, 0);
    color: white;
    margin-right: 10px;
    height: 80px;
    width: 180px;
    margin-top:80px;
    cursor:pointer;
    border-radius:8px;
    :hover{
      background:red;
    }
    @media (max-width: 685px) {
   
      height:50px;
      width:150px;
      margin-left:-120px;
  
  }
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // padding: 8px;
  // background: rgba(231, 0, 0, 0.95);
  
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // font-family: 'Roboto';
  // font-style: normal;
  // font-weight: 400;
  // font-size: 25px;

  // color: white;
  // cursor: pointer;

  // :hover{color:red;}
`;
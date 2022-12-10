import styled from 'styled-components';

export const ProjectContainerUnique = styled.div`
   display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
    svg {
    width: 4rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
    margin-right:3rem;
    margin-bottom: 2rem;
    margin-top: -2rem;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }
  .icon{
    display: flex;
    justify-content: center;
  }
    button {
    background: ${({ theme }) => theme.background};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;
    margin-top: 2rem;
    
    &:hover {
    background: #FF4500;
}
}
      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
    @media (max-width: 700px) {
     
      p {
        font-size: 1rem;
      }
      button {
        padding: 0.7rem 2rem;
        a {
          font-size: 0.9rem;
        }
      }
    }
  @media (max-width: 450px){
    p{
      width: 300px;
      
    }
    button{
      width: 300px;
      font-size: 10px;
    }
   
    
  }  
`
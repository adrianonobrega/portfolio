import { ButtonStyled } from './styles';
const Button = ({ item,handleClick}) => {

  return (
    <ButtonStyled onClick={() => handleClick(item.id)}>
{item.title}
    </ButtonStyled>
  
  );
};

export default Button
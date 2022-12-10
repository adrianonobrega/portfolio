import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
    <ul>
      <NavLink title="Home" path="/" includes={false}/>
      <NavLink title="Projetos" path="/projects" includes />
      <NavLink title="Diplomas" path="/diplom" includes={false}/>
    </ul>
  </Container>
  );
}

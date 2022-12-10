import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';
import { NavLinkProps } from '../../interfaces/Header';


export default function NavLink({ title, path, includes = false }: NavLinkProps) {
  const router = useRouter();

  function verifyIsActive() {
    if(includes) {
      return router.pathname.includes(path)
    }
    return path === router.pathname;
  }

  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
}
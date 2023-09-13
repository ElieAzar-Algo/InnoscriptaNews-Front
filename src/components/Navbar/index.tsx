import { Link } from 'react-router-dom'
import {
  NavbarWrapper,
  NavbarContainer,
  BrandLink,
  NavForm,
  FormInput,
  SearchButton,
  FormLabel,
  NavList,
  NavItem,
} from './navbar.style'
import { useNavigate } from 'react-router-dom';


const Navbar = () =>{
  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem('innoscriptaToken')
    navigate('/'); 
  }
  const token =localStorage.getItem('')
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <BrandLink href="index.php">Logo</BrandLink>
        <NavForm action="search.php">
          <FormLabel htmlFor="search">Search</FormLabel>
          <FormInput type="text" id="search" placeholder="Search" />
          <SearchButton type="submit">
            <span className="hidden-sm hidden-xs">Search</span>
            <i className="glyphicon glyphicon-search"></i>
          </SearchButton>
        </NavForm>
        <NavList>
          <NavItem className="active">
          <Link to="/home">Home</Link>
          </NavItem> 
          <NavItem>
            <a onClick={logout}>Log Out</a>
          </NavItem>
        </NavList>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
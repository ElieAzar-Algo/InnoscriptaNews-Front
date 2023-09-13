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
import { useState } from 'react';
import httpRequest from '../../http-request/httpRequest';
import { useArticleContext } from '../../context/ArticleContext';


const Navbar = () =>{
  const {articles, setSearchCtx, filterCtx, setArticles } = useArticleContext()

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const token =localStorage.getItem('innoscriptaToken')


  const logout = () =>{
    localStorage.removeItem('innoscriptaToken')
    navigate('/');
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await httpRequest({
        endpoint: '/article', 
        method: 'GET', 
        query:filterCtx?filterCtx:'',
        lookupQuery: {
          q: searchKeyword, 
        },
        token:token? token : undefined

      });
      if (response) {
        setSearchCtx(searchKeyword)
        setArticles(response);
      }
    }catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <BrandLink href="index.php">Logo</BrandLink>
        <NavForm onSubmit={handleSearch}>
          <FormLabel htmlFor="search">Search</FormLabel>
          <FormInput 
          type="text"
          id="search"
          placeholder="Search"
          value={searchKeyword}
          onChange={handleSearchInputChange}/>
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
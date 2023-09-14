import { useEffect } from 'react';
import ArticleCard from '../components/card';
import Navbar from '../components/Navbar';
import {CardContainer, LayoutContainer } from './styles/home.style'
import httpRequest from '../http-request/httpRequest';
import SideMenu from '../components/SideMenu';
import { ArticleProvider, useArticleContext } from '../context/ArticleContext';


function Home() {
    const token = localStorage.getItem('innoscriptaToken')
    // const[articles, setArticles] = useState([])
    const {articles,  setArticles } = useArticleContext();

  const getArticles = async () =>
  {
    try {
      const response = await httpRequest({
        endpoint:'/article',
        method:'GET',
        token:token? token : undefined
      })

      if(response){
        setArticles(response);
      }
    }catch(error){
      console.error('Error:', error);
    }
  }

    useEffect(()=>{
      getArticles()
    },[])
  return (
    <LayoutContainer>
      <Navbar/>
      <CardContainer>
        {articles.map((article:any)=>
          <ArticleCard key={article.id} data = {article}/>
        )}
      </CardContainer>
      <SideMenu/>
  </LayoutContainer>
  );
}

export default Home;

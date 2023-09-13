import { useEffect, useState } from 'react';
import ArticleCard from '../components/card';
import Form from '../components/common/Form';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import {CardContainer, LayoutContainer } from './styles/home.style'
import httpRequest from '../http-request/httpRequest';
import SideMenu from '../components/SideMenu';


function Home() {
    const token = localStorage.getItem('innoscriptaToken')
    const[articles, setArticles] = useState([])

  const getArticles = async () =>
  {
    console.log("007 yo1 token", token)
    
    try {
      console.log("007 yo2")
      const response = await httpRequest({
        endpoint:'/article',
        method:'GET',
        token:token? token : undefined
      })

      console.log("007 ARTICLES RESPONSE", response)
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

import { useEffect, useState } from 'react';
import ArticleCard from '../components/card';
import Form from '../components/common/Form';
import Navbar from '../components/header/Navbar';
import { useAuth } from '../context/AuthContext';
import {CardContainer, Card } from './styles/home.style'
import httpRequest from '../http-request/httpRequest';


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
      // if(response.status == 'Success'){
      //   const { data } = response
      // }
      // else if( response.status == 400)
      // {
        
      // }
    }catch(error){
      console.error('Error:', error);
    }
  }

    useEffect(()=>{
      getArticles()
    },[])
  return (
    <div>
    <CardContainer>
        <ArticleCard/>
      
      
        <ArticleCard/>
       
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      
      
     
    </CardContainer>
  </div>
  );
}

export default Home;

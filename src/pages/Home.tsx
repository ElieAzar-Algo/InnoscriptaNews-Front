import { useEffect, useState } from 'react';
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
    const [articleStorage, setArticleStorage] = useState<any[]>([]);
    

  const getArticles = async () =>
  {
    try { 
           const getUser = await httpRequest({
            endpoint:'/getUser',
            method:'GET',
            token:token? token : undefined,
          })
        
          console.log("authUser authUser", getUser) 
          const preferences = getUser?.preferences || [];
          
          console.log("Article preferences", preferences)

      for (let i = 0; i<preferences?.length; i++ ){
            const queryParams = new URLSearchParams();
            
            console.log("preferences loop start")
            let sourceQuery = getUser?.preferences[i].source !=="all"? getUser?.preferences[i].source: null
            let categoryQuery = getUser?.preferences[i].category !=="all"? getUser?.preferences[i].category: null
            let authorQuery = getUser?.preferences[i].author !=="all"? getUser?.preferences[i].author: null

            if(sourceQuery) queryParams.append('source', sourceQuery)
            if(categoryQuery) queryParams.append('category', categoryQuery)
            if(authorQuery) queryParams.append('author', authorQuery)


            console.log("preferences queryParams", queryParams)

            const response = await httpRequest({
              endpoint:'/article',
              method:'GET',
              token:token? token : undefined,
              query: queryParams? queryParams.toString():'',
            
            })

          console.log("Article RESPONSEEEE", response)
          if(response){
          
            setArticleStorage((prevStorage) => [...prevStorage, ...response]);
          }
      }
      console.log("Article Storage", articleStorage)
    }catch(error){
      console.error('Error:', error);
    }
  }

    useEffect(()=>{
      getArticles()
    },[])

    useEffect(()=>{
        setArticles(articleStorage);
    },[articleStorage])

  return (
    <LayoutContainer>
      <Navbar/>
      <button onClick={()=> 
      {
        console.log("ARTICLESSSSSS 0009", articles)
      }
        }>prtinnn</button>
      <CardContainer>
        {articles.map((article:any, index:number)=>
          <ArticleCard key={index} data = {article}/>
        )}
      </CardContainer>
      <SideMenu/>
  </LayoutContainer>
  );
}

export default Home;

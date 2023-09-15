import { useEffect, useState } from 'react';
import {
    Container,
    PreferenceGroup,
    Dropdown,
    SelectGroup,
    SelectLabel,
    TitleText
} from './styles/preference.style'
import { useArticleContext } from '../context/ArticleContext';
import httpRequest from '../http-request/httpRequest';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button'


type Preference = {
    source: string;
    author: string;
    category: string;
}

  type Article = {
    id: number
    api: string
    source: string
    author: string
    title: string
    description: string
    image_url: string
    article_url: string
    publishedAt: any
    category: string
    lang: string
    created_at: any
    updated_at: any
  };
  
  const Preference: React.FC = () => {
    const [preferences, setPreferences] = useState<Preference[]>([
        { source: '', author: '', category: '' },
      ]);
    const token = localStorage.getItem('innoscriptaToken')
    // const {articles,setArticles } = useArticleContext()
    // const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState<string[]>([])
    const [authors, setAuthors] = useState<string[]>([])
    const [sources, setSources] = useState<string[]>([])
  const navigate = useNavigate();


    function getOnlyUniqueFilters(extractProperty: (article: Article) => string, articles:any) {
    const uniqueFilters = new Set<string>()
    articles.forEach((article:any) => {
        const property = extractProperty(article)
        if (property) {
        uniqueFilters.add(property)
        }
    });
    return Array.from(uniqueFilters)
    }
      
    useEffect(() => {
        getArticles()

    },[])

    const getArticles = async () =>
    {
        try {
        const response = await httpRequest({
            endpoint:'/article',
            method:'GET',
            token:token? token : undefined
        })
        // console.log("007 Fetch articles from preference page", response)
        if(response){
            // setArticles(response);
            const uniqueAuthors = getOnlyUniqueFilters((response) => response.author, response);
            const uniqueCategories = getOnlyUniqueFilters((response) => response.category, response);
            const uniqueSources = getOnlyUniqueFilters((response) => response.source, response);
            setAuthors(uniqueAuthors);
            setCategories(uniqueCategories);
            setSources(uniqueSources);
        }
        }catch(error){
        console.error('Error:', error);
        }
    }
    
      const handleAddPreference = () => {
        if (preferences.length < 3) {
          setPreferences([...preferences, { source: '', author: '', category: '' }]);
        }
      };
    
      const handlePreferenceChange = (
        index: number,
        field: keyof Preference,
        value: string) => {
            const updatedPreferences = [...preferences];
            updatedPreferences[index][field] = value;
            setPreferences(updatedPreferences);
      };

      const submitPreferences = async () => {
          const preferencesObject = { preferences: preferences };
        //   console.log("settt preferences 007", preferencesObject)
        try {
          const response = await httpRequest(
            {
            endpoint:'/storeUserPreferences',
            method: 'POST',
            body: preferencesObject,
            token:token? token : undefined
            
          });
  
          if (response) {
        // console.log("settt preferences RESPONSE 007", response)
            navigate('/home')
          } 
        } catch (error) {
        console.log("ERROR in setting preferences", error)

        }
      };

      return (
        <Container>
          <TitleText>Choose up to 3 preference groups</TitleText>
          {preferences.map((pref, index) => (
            <PreferenceGroup key={index}>

              <SelectGroup>
                <SelectLabel>Source</SelectLabel>
                <Dropdown
                  value={pref.source}
                  onChange={(e) =>
                    handlePreferenceChange(index, 'source', e.target.value)
                  }
                >
                  <option value="">Select Source</option>
                  {sources.map((source, index) => (
                    <option key={index} value={source}>
                      {source}
                    </option>
                  ))}
                </Dropdown>
              </SelectGroup>

              <SelectGroup>
                <SelectLabel>Author</SelectLabel>
                <Dropdown
                  value={pref.author}
                  onChange={(e) =>
                    handlePreferenceChange(index, 'author', e.target.value)
                  }
                >
                  <option value="">Select Author</option>
                  {authors.map((author, index) => (
                    <option key={index} value={author}>
                      {author}
                    </option>
                  ))}
                </Dropdown>
              </SelectGroup>

              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <Dropdown
                  value={pref.category}
                  onChange={(e) =>
                    handlePreferenceChange(index, 'category', e.target.value)
                  }
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Dropdown>
              </SelectGroup>

            </PreferenceGroup>
          ))}
          <Button label="Add Preference" onClick={handleAddPreference}></Button>
          <Button label="Submit Preferences" onClick={submitPreferences}></Button>
        </Container>
      );
    };

export default Preference;

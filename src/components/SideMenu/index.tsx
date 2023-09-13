import { Link } from 'react-router-dom';
import {
    SidebarWrapper,
    SidebarTitle,
    DateFilter,
    DateLabel,
    DateInput,
    AuthorsDropdown,
    AuthorsLabel,
    AuthorsSelect,
} from './sideMenu.style'
import { useArticleContext } from '../../context/ArticleContext'
import { useEffect, useState } from 'react'
import httpRequest from '../../http-request/httpRequest';
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

const SideMenu = () =>{
  const {articles,searchCtx, setArticles, setFilterCtx } = useArticleContext()
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('');
  const [authors, setAuthors] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const token = localStorage.getItem('innoscriptaToken')

  
  function getOnlyUniqueFilters(extractProperty: (article: Article) => string) {
    const uniqueFilters = new Set<string>()
    articles.forEach((article) => {
      const property = extractProperty(article)
      if (property) {
        uniqueFilters.add(property)
      }
    });
    return Array.from(uniqueFilters)
  }
  
  useEffect(() => {
    const uniqueAuthors = getOnlyUniqueFilters((article) => article.author);
    const uniqueCategories = getOnlyUniqueFilters((article) => article.category);
    setAuthors(uniqueAuthors);
    setCategories(uniqueCategories);
  }, [articles])
  
  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  };
  
  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };
  

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthor(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  };

  const handleFilterChange = async () => {
    // Construct the query string for filtering
    const queryParams = new URLSearchParams();

    if (fromDate) {
      queryParams.append('from_date', fromDate);
    }

    if (toDate) {
      queryParams.append('to_date', toDate);
    }

    if (selectedAuthor) {
      queryParams.append('author', selectedAuthor);
    }

    if (selectedCategory) {
      queryParams.append('category', selectedCategory);
    }

    // Use the httpRequest utility to fetch filtered articles
    try {
      const response = await httpRequest({
        endpoint: '/article',
        method: 'GET',
        query: queryParams.toString(),
        lookupQuery:searchCtx? {
          q: searchCtx, 
        }:{},
        token:token? token : undefined
      });

      if (response) {
        setFilterCtx(queryParams.toString())
        setArticles(response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const printall= ()=>{
    console.log("fromDate 007 ", fromDate)
    console.log("toDate 007 ", toDate)
    console.log("selectedAuthor 007 ", selectedAuthor)
    console.log("selectedCategory 007 ", selectedCategory)
  }
  return (
    <SidebarWrapper>
      <SidebarTitle>Filters</SidebarTitle>
      <DateFilter>
        <DateLabel htmlFor="fromDate">From Date:</DateLabel>
        <DateInput
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={handleFromDateChange}
        />
      </DateFilter>
      <DateFilter>
        <DateLabel htmlFor="toDate">To Date:</DateLabel>
        <DateInput
          type="date"
          id="toDate"
          value={toDate}
          onChange={handleToDateChange}
    />
      </DateFilter>
      <AuthorsDropdown>
      <AuthorsLabel htmlFor="authors">Authors:</AuthorsLabel>
      <AuthorsSelect
      id="authors"
      value={selectedAuthor}
      onChange={handleAuthorChange}
    >
        <option value="">All authors</option>

        {authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
      </AuthorsSelect>
    </AuthorsDropdown>


    <AuthorsDropdown>
      <AuthorsLabel htmlFor="categories">Categories:</AuthorsLabel>
      <AuthorsSelect
      id="categories"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
        <option value="">All categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </AuthorsSelect>
    </AuthorsDropdown>
    <button onClick={handleFilterChange}>Apply Filters</button>
    <button onClick={printall}>print</button>
    </SidebarWrapper>
  );
}

export default SideMenu;
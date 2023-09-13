import { createContext, useContext, ReactNode, useState } from 'react'

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

type ArticleContextType = {
  articles: Article[]
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>
  searchCtx:string | null
  setSearchCtx: (searchCtx: string | null) => void
  filterCtx: string | null
  setFilterCtx: (filterCtx: string | null) => void

};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined)

export const useArticleContext = () => {
  const context = useContext(ArticleContext)
  if (!context) {
    throw new Error('useArticleContext must be used within an ArticleProvider')
  }
  return context
};

type ArticleProviderProps = {
  children: ReactNode
};

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchCtx, setSearchCtx] = useState<string | null>(null)
  const [filterCtx, setFilterCtx] = useState<string | null>(null)

  return (
    <ArticleContext.Provider value={{ 
      articles, setArticles,
      searchCtx, setSearchCtx,
      filterCtx, setFilterCtx,
      }}>
      {children}
    </ArticleContext.Provider>
  );
};


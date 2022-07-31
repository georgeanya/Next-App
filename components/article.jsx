import articleStyles from '../styles/article.module.css'
import ArticleItem from './articleItem'


const Article = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
          <ArticleItem article={article} key={article} />
      ))}
    </div>
  )
}

export default Article

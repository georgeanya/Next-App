import articleStyles from '../styles/article.module.css'

const Article = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export default Article

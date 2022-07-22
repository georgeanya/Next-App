import Head from "next/head";
import Article from "../components/article";


export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
      </Head>
      <Article articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

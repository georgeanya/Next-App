import Head from "next/head";

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}



export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}



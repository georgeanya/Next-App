// import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const article = await res.json();
  const ids = article.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};




var num = 08033036959
function Identify () {
    if (num.toString[1] = 0)  {
        console.log(true)    
    }
    else {
        console.log(false)
    }
}

Identify(num)

export default article;

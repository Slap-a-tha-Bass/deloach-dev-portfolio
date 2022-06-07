import Head from "next/head";
import Image from "next/image";
import { useReducer } from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/loader";
import styles from "../styles/Home.module.css";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function Blog() {
  const [on, toggle] = useReducer((s) => !s, false);

  const { data, loading, error } = useQuery(GET_POSTS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div style={{display:"flex", justifyContent:"flex-end", marginRight: "1rem"}}>
        <button className={styles.buttonToggleTheme} onClick={() => toggle(!on)}>
          {!on ? <HiOutlineMoon /> : <HiOutlineSun />}
        </button>
      </div>
      <Head>
        <title>Blog | Corey DeLoach</title>
        <meta
          name="description"
          content="Corey DeLoach | Modern Web Developer"
        />
        <meta name="color-scheme" content={on ? "dark" : "light"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.posts.map((post) => {
        return (
          <div key={post.id} style={{ width: "100%", height: "100vh" }}>
            <div style={{ textAlign: "center" }}>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={post.coverImage.url}
                layout="fill"
                alt={post.title}
                priority
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const GET_POSTS = gql`
  query GetBlogPosts {
    posts {
      id
      title
      description
      slug
      tags
      content
      coverImage {
        url
        width
        height
      }
      dateAndTime
    }
  }
`;

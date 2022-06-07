import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Loader from "../components/loader";

const Home = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div className={styles.container}>
      <Head>
        <title>Corey DeLoach | Developer</title>
        <meta
          name="description"
          content="Corey DeLoach | Modern Web Developer"
        />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span>Corey DeLoach</span>!
        </h1>
        <h2 className={styles.subtitle}>
          I am a full-stack <span>modern</span> web developer.
        </h2>
        <h3 className={styles.description}>
          Check out <span>{data.projects.length}</span> of my most recent projects below:
        </h3>
        <div style={{ padding: "2rem" }} />
        <div className={styles.grid}>
          {data?.projects.map((project) => {
            return (
              <Card
                key={project.slug}
                projectTitle={project.title}
                projectDescription={project.description}
                projectLink={project.link}
                projectImage={project.image.url}
              />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 | Corey DeLoach</p>
      </footer>
    </div>
  );
};

export default Home;

const GET_PROJECTS = gql`
  query MyQuery {
    projects(orderBy: publishedAt_DESC) {
      title
      description
      link
      image {
        url
        width
        height
      }
      slug
    }
  }
`;

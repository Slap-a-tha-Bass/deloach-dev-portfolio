import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Cloudinary } from "@cloudinary/url-gen";

const Home = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "slapathabass",
    },
    url: {
      secure: true,
    },
  });
  const IronandClayImage = cld
    .image(
      "https://res.cloudinary.com/slapathabass/image/upload/v1654011348/Deloach-dev/Screen_Shot_2022-05-31_at_10.35.30_AM_xh8apv.png"
    )
    .quality("auto")
    .format("auto");
  const BionTechImage = cld
    .image(
      "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.40.48_AM_isnexo.png"
    )
    .quality("auto")
    .format("auto");

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

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I&apos;m <span>Corey DeLoach</span>!</h1>
        <h1 className={styles.subtitle}>
          I am a full-stack <span>modern</span> web developer.
        </h1>
        <h3 className={styles.description}>
          Check out 6 of my most recent projects below:
        </h3>
        <div style={{ padding: "2rem" }} />
        <div className={styles.grid}>
          <div className={styles.card}>
            <div>
              <a
                href="https://ironandclay.studio"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Iron &amp; Clay Studio &rarr;</h2>
                <p>Headless E-commerce site using Next.js and GraphCMS</p>
              </a>
            </div>
            <div>
              <Image
                src={IronandClayImage.publicID}
                width={300}
                height={660}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://bion-tech.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Bion Tech News &rarr;</h2>
                <p>
                  Biotech news source with NextAuth (Github account required)
                </p>
              </a>
            </div>
            <div>
              <Image
                src={BionTechImage.publicID}
                width={300}
                height={660}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.card}>
            <a
              href="https://nasa-potd-xi.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <h2>NASA POTD &rarr;</h2>
              <p>NASA Picture of the Day</p>
            </a>
          </div>
          <div className={styles.card}>
            <a
              href="https://covid-tracker-app-seven.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <h2>US COVID Tracker &rarr;</h2>
              <p>COVID Tracker for the US Data using Covidactnow.org</p>
            </a>
          </div>
          <div className={styles.card}>
            <a
              href="https://prosci-lab.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <h2>ProSCI Labs &rarr;</h2>
              <p>Static site for research scientists.</p>
            </a>
          </div>
          <div className={styles.card}>
            <a
              href="https://cc-coffee-app.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2>C^2 Coffee &rarr;</h2>
              <p>
                Old school API CRUD operations for ordering coffee and snacks.
              </p>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
};

export default Home;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  IronandClayImage,
  BionTechImage,
  NASAPOTDImage,
  COVIDTrackerImage,
  ProSCIImage,
  CCCoffeeImage,
  PeriodicTableImage,
  GetflixImage,
} from "../lib/cloudinary";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
const Home = () => {
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
      <nav className={styles.nav}>
        <a
          className={styles.link}
          href="https://twitter.com/Slap_a_tha_Bass"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/corey-deloach/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className={styles.link}
          href="https://github.com/Slap-a-tha-Bass"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className={styles.link}
          href="mailto:scdeloach16@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <BiMailSend />
        </a>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span>Corey DeLoach</span>!
        </h1>
        <h2 className={styles.subtitle}>
          I am a full-stack <span>modern</span> web developer.
        </h2>
        <h3 className={styles.description}>
          Check out <span>8</span> of my most recent projects below:
        </h3>
        <div style={{ padding: "2rem" }} />
        <div className={styles.grid}>
        <div className={styles.card}>
            <div>
              <a
                href="https://getflix-app.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Getflix Trailers</h2>
                <p>Headless streaming service built with Next.js and GraphCMS</p>
              </a>
            </div>
            <div>
              <Image
                src={GetflixImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="Getflix Trailers"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://ironandclay.studio"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Iron &amp; Clay Studio &rarr;</h2>
                <p>Headless e-commerce site using Next.js and GraphCMS</p>
              </a>
            </div>
            <div>
              <Image
                src={IronandClayImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="Iron & Clay Studio"
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
                alt="Bion Tech News"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://nasa-potd-xi.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h2>NASA POTD &rarr;</h2>
                <p>NASA Picture of the Day using the open source NASA API</p>
              </a>
            </div>
            <div>
              <Image
                src={NASAPOTDImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="NASA POTD"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://covid-tracker-app-seven.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h2>US COVID Tracker &rarr;</h2>
                <p>US COVID Tracker for the US Data using Covidactnow.org</p>
              </a>
            </div>
            <div>
              <Image
                src={COVIDTrackerImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="US COVID Tracker"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://prosci-lab.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h2>ProSCI Labs &rarr;</h2>
                <p>
                  Static site for research scientists using styled components
                </p>
              </a>
            </div>
            <div>
              <Image
                src={ProSCIImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="ProSCI Labs"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://periodic-table-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Periodic Table &rarr;</h2>
                <p>
                  Periodic table | styled components (landscape mobile view)
                </p>
              </a>
            </div>
            <div>
              <Image
                src={PeriodicTableImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="Periodic Table"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <a
                href="https://cc-coffee-app.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <h2>C^2 Coffee &rarr;</h2>
                <p>
                  Old school API CRUD operations for ordering coffee (long load)
                </p>
              </a>
            </div>
            <div>
              <Image
                src={CCCoffeeImage.publicID}
                width={300}
                height={660}
                className={styles.image}
                alt="C^2 Coffee"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 | Corey DeLoach</p>
      </footer>
    </div>
  );
};

export default Home;

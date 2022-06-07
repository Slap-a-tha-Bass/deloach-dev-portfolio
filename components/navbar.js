import styles from '../styles/Home.module.css';
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

export default function Navbar() {
  return (
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
  );
}

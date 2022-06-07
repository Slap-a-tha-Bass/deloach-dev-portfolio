import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "slapathabass",
  },
  url: {
    secure: true,
  },
});

export default function Card({
  projectLink,
  projectTitle,
  projectDescription,
  projectImage,
}) {
  return (
    <div className={styles.card}>
      <div>
        <a href={projectLink} target="_blank" rel="noreferrer">
          <h2>{projectTitle} &rarr;</h2>
          <p>{projectDescription}</p>
        </a>
      </div>
      <div>
        <Image
          src={cld.image(projectImage).format("auto").quality("auto").publicID}
          width={300}
          height={660}
          className={styles.image}
          alt={projectTitle}
        />
      </div>
    </div>
  );
}

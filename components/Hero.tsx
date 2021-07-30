// Components
import { Button } from "@material-ui/core";

// Styles
import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <main className={`${styles.hero}`}>
      <div className={`${styles.content}`}>
        <h1>Welcome to my Personal Portfolio</h1>
        <p className={`${styles.text}`}>
          Hey there! My name is Thomas and I am currently a computer science
          student at John Abbott College in Montreal, QC. I am an aspiring
          software engineer and strive to learn as much as possible within the
          realm of computer science.
        </p>
        <Button variant="contained" color="primary">Learn More</Button>
      </div>
    </main>
  );
}

export default Hero;

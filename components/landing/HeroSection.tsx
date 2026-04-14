import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";

export function HeroSection() {
  return (
    <section className={`${styles.section} ${styles.hero}`} id={designTokens.sectionIds.hero}>
      <div className={styles.heroMockupFrame}>
        <img
          alt="Первый экран свадебного приглашения"
          className={styles.heroMockupImage}
          src="/mockup/instagram-story-6.svg"
        />
      </div>
    </section>
  );
}

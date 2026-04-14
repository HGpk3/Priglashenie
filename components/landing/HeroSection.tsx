import Image from "next/image";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingAssets, weddingContent } from "@/data/wedding-content";

export function HeroSection() {
  return (
    <section className={`${styles.section} ${styles.hero}`} id={designTokens.sectionIds.hero}>
      <div className={styles.heroBackdrop}>
        <div className={styles.heroGlow} />
        <Image src={weddingAssets.glitterTexture} alt="" fill priority className={styles.heroTexture} sizes="100vw" />
        <Image src={weddingAssets.roseFrame} alt="" className={styles.heroRoses} priority />
        <Image src={weddingAssets.butterfly} alt="" className={styles.heroButterfly} />
      </div>

      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.heroDateStack}>
            <div className={styles.heroDay}>{weddingContent.hero.day}</div>
            <div className={styles.heroMonth}>{weddingContent.hero.month}</div>
            <div className={styles.heroYear}>{weddingContent.hero.year}</div>
          </div>
          <span aria-hidden="true" className={styles.heroMonogram}>
            {weddingContent.couple.initials[0]}
          </span>
          <span aria-hidden="true" className={styles.heroMonogram}>
            {weddingContent.couple.initials[1]}
          </span>
          <div className={`${styles.heroNames} ${styles.heroNamesLeft}`}>{weddingContent.couple.groom}</div>
          <div className={`${styles.heroNames} ${styles.heroNamesRight}`}>{weddingContent.couple.bride}</div>
        </div>

        <div className={styles.heroPoster}>
          <img alt="Фотография пары" className={styles.heroPosterImage} src={weddingAssets.figmaHeroUrl} />
        </div>
      </div>
    </section>
  );
}

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
          <span className={styles.kicker}>{weddingContent.hero.eyebrow}</span>
          <span aria-hidden="true" className={styles.heroMonogram}>
            {weddingContent.couple.monogram}
          </span>
          <p className={styles.heroTagline}>{weddingContent.hero.tagline}</p>
          <h1 className={styles.heroNames}>{weddingContent.couple.names}</h1>
          <div className={styles.heroDate}>{weddingContent.event.dateLabel}</div>
          <p className={styles.heroLead}>{weddingContent.hero.lead}</p>
          <div className={styles.heroNote}>{weddingContent.hero.note}</div>
        </div>

        <div className={styles.heroPoster}>
          <Image
            src={weddingAssets.heroPhoto}
            alt="Фотография пары"
            fill
            priority
            className={styles.heroPosterImage}
            sizes="(max-width: 1080px) 100vw, 46vw"
          />
        </div>
      </div>
    </section>
  );
}

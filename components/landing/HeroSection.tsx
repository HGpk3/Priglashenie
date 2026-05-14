"use client";

import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingAssets, weddingContent } from "@/data/wedding-content";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [groom, bride] = [weddingContent.couple.groom, weddingContent.couple.bride];
  const formatDisplayName = (name: string) => {
    const lowerName = name.toLocaleLowerCase("ru-RU");

    return lowerName.replace(/^./u, (letter) => letter.toLocaleUpperCase("ru-RU"));
  };
  const [groomDisplay, brideDisplay] = [formatDisplayName(groom), formatDisplayName(bride)];
  const [showPrelude, setShowPrelude] = useState(true);
  const renderName = (name: string) => (
    <span className={styles.heroNameWord}>
      <span className={styles.heroNameInitial}>{name.slice(0, 1)}</span>
      <span className={styles.heroNameRest}>{name.slice(1)}</span>
    </span>
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPrelude(false), 2750);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.section} ${styles.hero}`} id={designTokens.sectionIds.hero}>
      <div className={styles.heroPoster}>
        {showPrelude ? (
          <div className={styles.heroPrelude} aria-hidden="true">
            <div className={styles.heroPreludeInk}>
              <span className={styles.heroPreludeName}>
                {groomDisplay} &amp; {brideDisplay}
              </span>
              <span className={styles.heroPreludeDate}>{weddingContent.event.dateFull}</span>
            </div>
          </div>
        ) : null}
        <div className={styles.heroPosterShade} aria-hidden="true" />
        <div className={styles.heroPhotoStage}>
          <Image
            src={weddingAssets.heroPortrait}
            alt={`${groom} и ${bride}`}
            className={styles.heroPosterImage}
            fill
            priority
            sizes="(max-width: 720px) 100vw, 66vw"
          />
        </div>
        <Image
          src={weddingAssets.glitterTexture}
          alt=""
          className={styles.heroTexture}
          aria-hidden="true"
          fill
          sizes="100vw"
        />
        <Image
          src={weddingAssets.fingerprintHeart}
          alt=""
          className={styles.heroHeart}
          aria-hidden="true"
          width={260}
          height={390}
        />

        <div className={styles.heroCopy}>
          <p className={styles.heroKicker}>wedding</p>
          <h1 className={styles.heroNames} aria-label={`${groom} и ${bride}`}>
            {renderName(groom)}
            {renderName(bride)}
          </h1>
          <div className={styles.heroDateLine} aria-label={weddingContent.event.dateFull}>
            <span>{weddingContent.hero.day}</span>
            <span>{weddingContent.hero.month}</span>
            <span>{weddingContent.hero.year}</span>
          </div>
        </div>

        <div className={styles.heroScrollCue} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

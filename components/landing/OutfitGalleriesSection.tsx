import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import Image from "next/image";

export function OutfitGalleriesSection() {
  return (
    <section className={`${styles.section} ${styles.lightSection} ${styles.gallerySection}`} id={designTokens.sectionIds.galleries}>
      <div className={`${styles.card} ${styles.galleryCard}`}>
        <div className={styles.galleryTitle}>{weddingContent.dressCode.looksTitle}</div>
        <div className={styles.gallerySubheading}>{weddingContent.dressCode.femaleTitle}</div>

        <div className={`${styles.galleryGrid} ${styles.femaleGallery}`}>
          {weddingContent.outfitGalleries.femaleLooks.map((look) => (
            <figure className={styles.lookCard} data-tone={look.tone} key={look.label}>
              <div className={styles.lookImageWrap}>
                <Image
                  src={look.image}
                  alt={look.label}
                  fill
                  className={styles.lookImage}
                  sizes="(max-width: 720px) 25vw, 12vw"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className={styles.gallerySubheading}>{weddingContent.dressCode.maleTitle}</div>

        <div className={`${styles.galleryGrid} ${styles.maleGallery}`}>
          {weddingContent.outfitGalleries.maleLooks.map((look) => (
            <figure className={styles.lookCard} data-tone={look.tone} key={look.label}>
              <div className={styles.lookImageWrap}>
                <Image
                  src={look.image}
                  alt={look.label}
                  fill
                  className={styles.lookImage}
                  sizes="(max-width: 720px) 25vw, 12vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

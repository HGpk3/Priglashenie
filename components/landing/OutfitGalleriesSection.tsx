import Image from "next/image";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingAssets, weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function OutfitGalleriesSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.galleries}>
      <div className={`${styles.card} ${styles.galleryCard}`}>
        <Image src={weddingAssets.ribbon} alt="" className={styles.galleryRibbon} />
        <SectionHeading
          kicker="Outfit galleries"
          title={weddingContent.outfitGalleries.title}
          description={weddingContent.outfitGalleries.description}
        />

        <div className={styles.galleryGrid}>
          {weddingContent.outfitGalleries.looks.map((look) => (
            <figure className={styles.lookCard} key={look.label}>
              <div className={styles.lookImageWrap}>
                <Image
                  src={look.image}
                  alt={look.label}
                  fill
                  className={styles.lookImage}
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 44vw, 18vw"
                />
              </div>
              <figcaption className={styles.lookCaption}>
                <span className={styles.lookTone} data-tone={look.tone} />
                <span>{look.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

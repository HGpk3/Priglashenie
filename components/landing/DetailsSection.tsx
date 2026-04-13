import Image from "next/image";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingAssets, weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function DetailsSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.details}>
      <div className={styles.detailsGrid}>
        <div className={`${styles.card} ${styles.detailsCard}`}>
          <SectionHeading kicker="Details" title={weddingContent.details.title} />
          <div className={styles.detailsList}>
            {weddingContent.details.items.map((item) => (
              <article className={`${styles.card} ${styles.detailItem}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={`${styles.card} ${styles.detailsAside}`}>
          <Image src={weddingAssets.fingerprintHeart} alt="" className={styles.detailsHeart} />
          <Image src={weddingAssets.cocktail} alt="" className={styles.detailsCocktail} />

          <div className={styles.detailsAsideInner}>
            <span className={styles.kicker}>Contacts</span>
            <h3 className={styles.detailsAsideTitle}>{weddingContent.details.contactCardTitle}</h3>
            <p className={styles.detailsAsideText}>{weddingContent.details.contactCardText}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

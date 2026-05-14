import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import Image from "next/image";

export function DetailsSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.details}>
      <div className={styles.detailsGrid}>
        <div className={`${styles.card} ${styles.detailsCard}`}>
          <Image
            src="/decor/details-butterfly.jpg"
            alt=""
            aria-hidden="true"
            width={498}
            height={372}
            className={styles.detailsButterfly}
          />
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{weddingContent.details.title}</h2>
          </div>
          <div className={styles.detailsList}>
            {weddingContent.details.items.map((item, index) => (
              <article className={styles.detailItem} key={item}>
                <div className={styles.detailNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.detailTextWrap}>
                  <p>{item}</p>
                  {index === 0 ? <p className={styles.detailExtraLine}>{weddingContent.details.extraLine}</p> : null}
                </div>
              </article>
            ))}
          </div>
          <p className={styles.detailClosingLine}>{weddingContent.details.closingLine}</p>
        </div>
      </div>
    </section>
  );
}

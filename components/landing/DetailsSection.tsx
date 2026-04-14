import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function DetailsSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.details}>
      <div className={styles.detailsGrid}>
        <div className={`${styles.card} ${styles.detailsCard}`}>
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
                  {index === weddingContent.details.items.length - 1 ? (
                    <p className={styles.detailClosingLine}>{weddingContent.details.closingLine}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

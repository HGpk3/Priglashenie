import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function DressCodeSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.dressCode}>
      <div className={styles.dressGrid}>
        <div className={`${styles.card} ${styles.dressCard}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{weddingContent.dressCode.title}</h2>
            <p className={styles.dressBodyText}>{weddingContent.dressCode.description}</p>
            <p className={styles.warningText}>{weddingContent.dressCode.warning}</p>
          </div>

          <div className={styles.paletteGrid}>
            {weddingContent.dressCode.palette.map((tone) => (
              <div className={styles.paletteChip} key={tone.key}>
                <span className={styles.paletteSwatch} data-tone={tone.key} />
                <span>{tone.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

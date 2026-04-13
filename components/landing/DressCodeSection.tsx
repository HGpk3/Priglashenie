import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function DressCodeSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.dressCode}>
      <div className={styles.dressGrid}>
        <div className={`${styles.card} ${styles.dressCard}`}>
          <SectionHeading
            kicker="Dress code"
            title={weddingContent.dressCode.title}
            description={weddingContent.dressCode.description}
          />

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

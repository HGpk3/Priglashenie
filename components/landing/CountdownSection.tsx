import styles from "./LandingPage.module.css";
import { Countdown } from "@/components/Countdown";
import { designTokens } from "@/data/design-tokens";
import { weddingAssets, weddingContent } from "@/data/wedding-content";

export function CountdownSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.countdown}>
      <div className={`${styles.card} ${styles.countdownCard}`}>
        <div className={styles.countdownIntro}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{weddingContent.countdown.title}</h2>
          </div>
        </div>

        <img alt="Фотография пары" className={styles.countdownImage} src={weddingAssets.figmaClosingUrl} />
        <div className={styles.countdownOverlay} />

        <Countdown
          targetIso={weddingContent.event.dateIso}
          className={styles.countdownFooter}
          itemClassName={styles.countdownCell}
          valueClassName={styles.countdownValue}
          labelClassName={styles.countdownLabel}
        />
      </div>
    </section>
  );
}

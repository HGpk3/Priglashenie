import styles from "./LandingPage.module.css";
import { Countdown } from "@/components/Countdown";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function CountdownSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.countdown}>
      <div className={`${styles.card} ${styles.countdownCard}`}>
        <div className={styles.countdownShell}>
          <div>
            <SectionHeading
              kicker="Countdown"
              title={weddingContent.countdown.title}
              description={weddingContent.countdown.description}
            />
          </div>

          <div>
            <div className={styles.countdownScript}>{weddingContent.event.dateFull}</div>
            <Countdown
              targetIso={weddingContent.event.dateIso}
              className={styles.countdownFrame}
              itemClassName={styles.countdownCell}
              valueClassName={styles.countdownValue}
              labelClassName={styles.countdownLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

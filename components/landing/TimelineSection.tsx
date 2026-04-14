import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function TimelineSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.timeline}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>ТАЙМИНГ</h2>
      </div>

      <div className={styles.timelineShell}>
        {weddingContent.timeline.map((item) => (
          <article className={`${styles.card} ${styles.timelineItem}`} key={`${item.time}-${item.title}`}>
            <div className={styles.timelineTime}>{item.time}</div>
            <div className={styles.timelineBody}>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

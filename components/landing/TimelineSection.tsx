import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function TimelineSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.timeline}>
      <SectionHeading
        kicker="Timeline"
        title="Timeline"
        description="Каждый важный момент дня вынесен в отдельный блок, чтобы тайминг оставался читаемым и лёгким на мобильном экране."
      />

      <div className={styles.timelineShell}>
        {weddingContent.timeline.map((item) => (
          <article className={`${styles.card} ${styles.timelineItem}`} key={`${item.time}-${item.title}`}>
            <div className={styles.timelineTime}>{item.time}</div>
            <div className={styles.timelineBody}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

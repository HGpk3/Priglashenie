import Image from "next/image";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import timelineHeart from "@/source/photo_5276421358579553821_y (1) 6.png";

export function TimelineSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.timeline}>
      <div className={styles.timelineShell}>
        <div className={styles.timelineCard}>
          <Image src={timelineHeart} alt="" className={styles.timelineHeartTop} />
          <Image src={timelineHeart} alt="" className={styles.timelineHeartBottom} />

          <div className={styles.timelineHeader}>
            <h2 className={styles.sectionTitle}>ТАЙМИНГ</h2>
          </div>

          <div className={styles.timelineList}>
            {weddingContent.timeline.map((item) => (
              <article className={styles.timelineItem} key={`${item.time}-${item.title}`}>
                <div className={styles.timelineTime}>{item.time}</div>
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span className={styles.timelineMarkerDot} />
                </div>
                <div className={styles.timelineBody}>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

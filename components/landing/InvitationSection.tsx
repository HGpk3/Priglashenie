import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function InvitationSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.invitation}>
      <div className={styles.invitationGrid}>
        <article className={`${styles.card} ${styles.invitationLetter}`}>
          <div className={styles.invitationHeader}>
            <div className={styles.invitationEyebrow}>{weddingContent.invitation.title}</div>
            <div className={styles.invitationScript}>{weddingContent.invitation.scriptLine}</div>
          </div>

          <div className={styles.invitationText}>
            {weddingContent.invitation.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.invitationMeta}>
            {weddingContent.invitation.meta.map((item) => (
              <div className={styles.metaItem} key={item.label}>
                <div className={styles.metaLabel}>{item.label}</div>
                <div className={styles.metaValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

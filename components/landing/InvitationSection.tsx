import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function InvitationSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.invitation}>
      <div className={styles.invitationGrid}>
        <article className={`${styles.card} ${styles.invitationLetter}`}>
          <SectionHeading kicker="Invitation" title={weddingContent.invitation.title} />
          <div className={styles.invitationText}>
            {weddingContent.invitation.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className={`${styles.card} ${styles.invitationAside}`}>
          <span className={styles.kicker}>{weddingContent.invitation.asideTitle}</span>
          <h3 className={styles.cardTitle}>{weddingContent.event.venue}</h3>
          <div className={styles.cardText}>
            <p>{weddingContent.invitation.asideText}</p>
            <p>{weddingContent.event.address}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

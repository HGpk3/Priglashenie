import Image from "next/image";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import invitationCocktail from "@/source/photo_5276421358579553820_x 2.png";
import invitationSeal from "@/source/photo_5276421358579553821_y (3) 2.png";

export function InvitationSection() {
  const [dateMeta, venueMeta] = weddingContent.invitation.meta;

  return (
    <section className={styles.section} id={designTokens.sectionIds.invitation}>
      <div className={styles.invitationGrid}>
        <article className={styles.invitationLetter}>
          <div className={styles.invitationContent}>
            <Image src={invitationSeal} alt="" className={styles.invitationSeal} />

            <div className={styles.invitationHeader}>
              <div className={styles.invitationEyebrow}>{weddingContent.invitation.title}</div>
              <div className={styles.invitationScript}>{weddingContent.invitation.scriptLine}</div>
            </div>

            <div className={styles.invitationText}>
              {weddingContent.invitation.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.invitationMetaStack}>
              <div className={styles.invitationMetaGroup}>
                <div className={styles.metaLabel}>{dateMeta.label}</div>
                <div className={styles.invitationDateValue}>{dateMeta.value}</div>
              </div>

              <div className={styles.invitationMetaGroup}>
                <div className={styles.metaLabel}>{venueMeta.label}</div>
                <div className={styles.invitationVenueValue}>{venueMeta.value}</div>
              </div>
            </div>
          </div>
          <Image
            src={invitationCocktail}
            alt=""
            className={styles.invitationCocktail}
            sizes="(max-width: 720px) 88px, 114px"
          />
        </article>
      </div>
    </section>
  );
}

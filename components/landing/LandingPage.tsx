import styles from "./LandingPage.module.css";
import { HeroSection } from "./HeroSection";
import { InvitationSection } from "./InvitationSection";
import { TimelineSection } from "./TimelineSection";
import { DressCodeSection } from "./DressCodeSection";
import { OutfitGalleriesSection } from "./OutfitGalleriesSection";
import { RsvpFormSection } from "./RsvpFormSection";
import { DetailsSection } from "./DetailsSection";
import { CountdownSection } from "./CountdownSection";
import { ScrollReveal } from "./ScrollReveal";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <ScrollReveal
        heroClassName={styles.hero}
        revealClassName={styles.revealSection}
        sectionClassName={styles.section}
        visibleClassName={styles.revealSectionVisible}
      />
      <HeroSection />
      <InvitationSection />
      <TimelineSection />
      <DressCodeSection />
      <OutfitGalleriesSection />
      <RsvpFormSection />
      <DetailsSection />
      <CountdownSection />
    </main>
  );
}

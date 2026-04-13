import styles from "./LandingPage.module.css";
import { HeroSection } from "./HeroSection";
import { InvitationSection } from "./InvitationSection";
import { TimelineSection } from "./TimelineSection";
import { DressCodeSection } from "./DressCodeSection";
import { OutfitGalleriesSection } from "./OutfitGalleriesSection";
import { RsvpFormSection } from "./RsvpFormSection";
import { DetailsSection } from "./DetailsSection";
import { CountdownSection } from "./CountdownSection";

export function LandingPage() {
  return (
    <main className={styles.page}>
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

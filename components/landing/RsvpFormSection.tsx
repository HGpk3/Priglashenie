import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";
import { SectionHeading } from "./SectionHeading";

export function RsvpFormSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.rsvp}>
      <div className={`${styles.card} ${styles.formCard}`}>
        <SectionHeading kicker="RSVP" title={weddingContent.rsvp.title} description={weddingContent.rsvp.description} />

        <form className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="name">Ваши имя и фамилия</label>
            <input id="name" name="name" type="text" placeholder="Например: Анна Смирнова" />
          </div>

          <fieldset className={styles.fieldset}>
            <legend>Планируете ли вы присутствовать?</legend>
            <div className={styles.choiceRow}>
              {weddingContent.rsvp.attendanceOptions.map((option) => (
                <label className={styles.choice} key={option}>
                  <input type="radio" name="attendance" value={option} defaultChecked={option === "Да"} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="alcohol">Алкогольные предпочтения</label>
              <select id="alcohol" name="alcohol" defaultValue={weddingContent.rsvp.alcoholPreferences[0]}>
                {weddingContent.rsvp.alcoholPreferences.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="meal">Что предпочитаете?</label>
              <select id="meal" name="meal" defaultValue={weddingContent.rsvp.mealOptions[0]}>
                {weddingContent.rsvp.mealOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="allergies">Есть ли аллергии?</label>
              <textarea id="allergies" name="allergies" rows={4} placeholder="Если есть, пожалуйста, напишите их здесь" />
            </div>

            <fieldset className={styles.fieldset}>
              <legend>Нужен ли трансфер?</legend>
              <div className={styles.choiceRow}>
                {weddingContent.rsvp.transferOptions.map((option) => (
                  <label className={styles.choice} key={option}>
                    <input type="radio" name="transfer" value={option} defaultChecked={option === "Нет"} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className={styles.formFooter}>
            <p className={styles.formNote}>{weddingContent.rsvp.deadline}</p>
            <button className={styles.formButton} type="button">
              {weddingContent.rsvp.buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

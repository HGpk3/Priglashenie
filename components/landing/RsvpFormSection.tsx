import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function RsvpFormSection() {
  return (
    <section className={styles.section} id={designTokens.sectionIds.rsvp}>
      <div className={styles.formCard}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{weddingContent.rsvp.title}</h2>
          <div className={styles.formLead}>{weddingContent.rsvp.lead}</div>
          <div className={styles.deadlineLine}>
            <span className={styles.deadlinePrefix}>{weddingContent.rsvp.deadline.prefix}</span>
            <div className={styles.deadlineBlock}>
              <span className={styles.deadlineDay}>{weddingContent.rsvp.deadline.day}</span>
              <span className={styles.deadlineMonth}>{weddingContent.rsvp.deadline.month}</span>
              <span className={styles.deadlineYear}>{weddingContent.rsvp.deadline.year}</span>
            </div>
          </div>
        </div>

        <form className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="name">{weddingContent.rsvp.nameLabel}</label>
            <input id="name" name="name" type="text" />
          </div>

          <fieldset className={styles.fieldset}>
            <legend>{weddingContent.rsvp.attendanceLabel}</legend>
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
              <label>{weddingContent.rsvp.alcoholLabel}</label>
              <fieldset className={styles.fieldset}>
                <div className={styles.choiceRow}>
                  {weddingContent.rsvp.alcoholPreferences.map((option, index) => (
                    <label className={styles.choice} key={option}>
                      <input type="radio" name="alcohol" value={option} defaultChecked={index === 0} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className={styles.field}>
              <label>{weddingContent.rsvp.mealLabel}</label>
              <fieldset className={styles.fieldset}>
                <div className={styles.choiceRow}>
                  {weddingContent.rsvp.mealOptions.map((option, index) => (
                    <label className={styles.choice} key={option}>
                      <input type="radio" name="meal" value={option} defaultChecked={index === 0} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="allergies">{weddingContent.rsvp.allergyLabel}</label>
              <textarea id="allergies" name="allergies" rows={2} />
            </div>

            <fieldset className={styles.fieldset}>
              <legend>{weddingContent.rsvp.transferLabel}</legend>
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
            <button className={styles.formButton} type="submit">{weddingContent.rsvp.buttonLabel}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

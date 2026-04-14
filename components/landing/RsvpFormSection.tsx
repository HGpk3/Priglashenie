"use client";

import { useState, type FormEvent } from "react";
import styles from "./LandingPage.module.css";
import { designTokens } from "@/data/design-tokens";
import { weddingContent } from "@/data/wedding-content";

export function RsvpFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      attendance: String(formData.get("attendance") ?? ""),
      alcohol: String(formData.get("alcohol") ?? ""),
      meal: String(formData.get("meal") ?? ""),
      allergies: String(formData.get("allergies") ?? ""),
      transfer: String(formData.get("transfer") ?? "")
    };

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Не удалось отправить анкету. Попробуйте ещё раз чуть позже.");
      }

      form.reset();
      setFeedback({
        tone: "success",
        text: "Анкета отправлена. Спасибо, мы получили ваш ответ."
      });
    } catch (error) {
      setFeedback({
        tone: "error",
        text: error instanceof Error ? error.message : "Сервис анкеты временно недоступен."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.section} id={designTokens.sectionIds.rsvp}>
      <div className={styles.formCard}>
        <div className={styles.formHero}>
          <div className={styles.kicker}>RSVP</div>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{weddingContent.rsvp.title}</h2>
            <div className={styles.formLead}>{weddingContent.rsvp.lead}</div>
          </div>
          <div className={styles.formDeadlineCard}>
            <span className={styles.formDeadlineLabel}>{weddingContent.rsvp.deadline.prefix}</span>
            <span className={styles.deadlineDay}>{weddingContent.rsvp.deadline.day}</span>
            <span className={styles.deadlineMonth}>{weddingContent.rsvp.deadline.month}</span>
            <span className={styles.deadlineYear}>{weddingContent.rsvp.deadline.year}</span>
          </div>
        </div>

        <form className={styles.formGrid} onSubmit={handleSubmit}>
          <div className={styles.formPanel}>
            <label className={styles.formQuestionTitle} htmlFor="name">
              {weddingContent.rsvp.nameLabel}
            </label>
            <div className={styles.field}>
              <input
                className={styles.formLineInput}
                id="name"
                name="name"
                type="text"
                placeholder="Напишите имя и фамилию"
                required
              />
            </div>
          </div>

          <fieldset aria-labelledby="attendance-label" className={`${styles.fieldset} ${styles.formPanel}`}>
            <div className={styles.formQuestionTitle} id="attendance-label">
              {weddingContent.rsvp.attendanceLabel}
            </div>
            <div className={`${styles.choiceRow} ${styles.choiceGridCompact}`}>
              {weddingContent.rsvp.attendanceOptions.map((option) => (
                <label className={styles.choice} key={option}>
                  <input type="radio" name="attendance" value={option} defaultChecked={option === "Да"} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset aria-labelledby="alcohol-label" className={`${styles.fieldset} ${styles.formPanel}`}>
            <div className={styles.formQuestionTitle} id="alcohol-label">
              {weddingContent.rsvp.alcoholLabel}
            </div>
            <div className={`${styles.choiceRow} ${styles.choiceGrid}`}>
              {weddingContent.rsvp.alcoholPreferences.map((option, index) => (
                <label className={styles.choice} key={option}>
                  <input type="radio" name="alcohol" value={option} defaultChecked={index === 0} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset aria-labelledby="meal-label" className={`${styles.fieldset} ${styles.formPanel}`}>
            <div className={styles.formQuestionTitle} id="meal-label">
              {weddingContent.rsvp.mealLabel}
            </div>
            <div className={`${styles.choiceRow} ${styles.choiceGridCompact}`}>
              {weddingContent.rsvp.mealOptions.map((option, index) => (
                <label className={styles.choice} key={option}>
                  <input type="radio" name="meal" value={option} defaultChecked={index === 0} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.formPanel}>
            <label className={styles.formQuestionTitle} htmlFor="allergies">
              {weddingContent.rsvp.allergyLabel}
            </label>
            <div className={styles.field}>
              <textarea
                className={styles.formTextArea}
                id="allergies"
                name="allergies"
                rows={4}
                placeholder="Если есть, напишите здесь"
              />
            </div>
          </div>

          <fieldset aria-labelledby="transfer-label" className={`${styles.fieldset} ${styles.formPanel}`}>
            <div className={styles.formQuestionTitle} id="transfer-label">
              {weddingContent.rsvp.transferLabel}
            </div>
            <div className={`${styles.choiceRow} ${styles.choiceGridCompact}`}>
              {weddingContent.rsvp.transferOptions.map((option) => (
                <label className={styles.choice} key={option}>
                  <input type="radio" name="transfer" value={option} defaultChecked={option === "Нет"} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.formFooter}>
            <p className={styles.formNote}>
              Если планы изменятся позже, просто дайте нам знать удобным способом.
            </p>
            {feedback ? (
              <p
                aria-live="polite"
                className={`${styles.formStatus} ${
                  feedback.tone === "success" ? styles.formStatusSuccess : styles.formStatusError
                }`}
              >
                {feedback.text}
              </p>
            ) : null}
            <button className={styles.formButton} disabled={isSubmitting} type="submit">
              {isSubmitting ? "Отправляем..." : weddingContent.rsvp.buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

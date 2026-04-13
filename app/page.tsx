import styles from "./page.module.css";
import { siteContent } from "@/data/site-content";

type CountdownPart = {
  label: string;
  value: number;
};

function getCountdownParts(targetIso: string): CountdownPart[] {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / 1000);

  return [
    { label: "дней", value: days },
    { label: "часов", value: hours },
    { label: "минут", value: minutes },
    { label: "секунд", value: seconds }
  ];
}

export default function HomePage() {
  const countdownParts = getCountdownParts(siteContent.event.dateIso);

  return (
    <main className={styles.page}>
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroPanel}>
          <div className={styles.eyebrow}>{siteContent.hero.eyebrow}</div>
          <h1 className={styles.heroTitle}>{siteContent.couple.displayName}</h1>
          <p className={styles.heroSubtitle}>{siteContent.hero.subtitle}</p>

          <div className={styles.heroMeta}>
            <div className={styles.glassCard}>
              <p className={styles.cardLabel}>Дата</p>
              <p className={styles.cardValue}>{siteContent.event.dateLabel}</p>
              <p className={styles.cardText}>{siteContent.event.dateNote}</p>
            </div>

            <div className={styles.glassCard}>
              <p className={styles.cardLabel}>Локация</p>
              <p className={styles.cardValue}>{siteContent.event.venue}</p>
              <p className={styles.cardText}>{siteContent.event.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionTag}>О событии</p>
              <h2 className={styles.sectionTitle}>Лендинг уже можно собирать по структуре макета.</h2>
              <p className={styles.sectionLead}>{siteContent.story.lead}</p>
            </div>

            <div className={styles.detailsList}>
              {siteContent.story.details.map((detail) => (
                <article className={styles.detailsItem} key={detail.title}>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.glassCard}>
            <p className={styles.cardLabel}>Countdown</p>
            <p className={styles.cardText}>{siteContent.countdown.note}</p>
            <div className={styles.countdownGrid}>
              {countdownParts.map((part) => (
                <div className={styles.countdownCell} key={part.label}>
                  <span className={styles.countdownValue}>{String(part.value).padStart(2, "0")}</span>
                  <span className={styles.countdownLabel}>{part.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionTag}>Тайминг</p>
          <h2 className={styles.sectionTitle}>День должен считываться быстро даже на телефоне.</h2>
          <p className={styles.sectionLead}>
            Тайминг уже перенесён в структуру страницы, но несколько формулировок ещё ждут ручного подтверждения.
          </p>
        </div>

        <div className={styles.timelineList}>
          {siteContent.timeline.map((item) => (
            <article className={styles.timelineItem} key={`${item.time}-${item.title}`}>
              <div className={styles.timelineTime}>{item.time}</div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.needsConfirmation ? <span className={styles.timelineBadge}>нужна сверка</span> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionTag}>Dress Code</p>
          <h2 className={styles.sectionTitle}>Сильная палитра уже зафиксирована в проекте.</h2>
          <p className={styles.sectionLead}>
            Макет задаёт не пастельную, а более вечернюю и редакционную историю. Поэтому блок дресс-кода сразу
            заложен как один из центральных.
          </p>
        </div>

        <div className={styles.palette}>
          {siteContent.dressCode.palette.map((color) => (
            <div
              className={styles.swatch}
              key={color.name}
              style={{
                background: `linear-gradient(180deg, ${color.hex}, rgba(8, 8, 10, 0.96))`
              }}
            >
              <span>{color.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionTag}>RSVP</p>
              <h2 className={styles.sectionTitle}>Анкету закладываем как отдельный независимый модуль.</h2>
              <p className={styles.sectionLead}>
                Это позволит позже подключить форму, Telegram, WhatsApp или любой другой способ ответа без переделки
                всей страницы.
              </p>
            </div>

            <div className={styles.rsvpPanel}>
              {siteContent.rsvp.questions.map((question) => (
                <article className={styles.questionItem} key={question.title}>
                  <h3>{question.title}</h3>
                  <p>{question.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.statusPanel}>
            {siteContent.statusNotes.map((note) => (
              <div className={styles.statusItem} key={note}>
                {note}
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionTag}>Пожелания</p>
              <h2 className={styles.sectionTitle}>Организационные детали лучше писать мягко, но очень ясно.</h2>
            </div>

            <div className={styles.wishList}>
              {siteContent.wishes.map((wish) => (
                <article className={styles.wishItem} key={wish.title}>
                  <h3>{wish.title}</h3>
                  <p>{wish.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.glassCard}>
            <p className={styles.cardLabel}>Контакты</p>
            <p className={styles.cardValue}>{siteContent.contacts.title}</p>
            <p className={styles.cardText}>{siteContent.contacts.text}</p>
            <div className={styles.rsvpNote}>{siteContent.contacts.note}</div>
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.footer}`}>
        <div className={styles.footerBox}>
          <p>{siteContent.footer}</p>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import styles from "./LandingPage.module.css";

type RsvpSubmission = {
  id: string;
  submittedAt: string;
  source: string;
  name: string;
  attendance: string;
  alcohol: string;
  meal: string;
  allergies: string;
  transfer: string;
};

type RsvpResultsResponse = {
  ok?: boolean;
  error?: string;
  summary?: {
    total: number;
    attending: number;
    notAttending: number;
    needsTransfer: number;
    alcohol: Record<string, number>;
    meal: Record<string, number>;
  };
  submissions?: RsvpSubmission[];
};

const formatDate = new Intl.DateTimeFormat("ru-RU", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Moscow"
});

function formatSubmittedAt(value: string) {
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? value : formatDate.format(date);
}

function formatBreakdown(values: Record<string, number> | undefined) {
  if (!values || Object.keys(values).length === 0) {
    return "Нет данных";
  }

  return Object.entries(values)
    .map(([label, count]) => `${label}: ${count}`)
    .join(", ");
}

export function RsvpResultsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<RsvpResultsResponse | null>(null);

  const submissions = results?.submissions ?? [];
  const summary = results?.summary;
  const hasResults = submissions.length > 0;
  const alcoholSummary = useMemo(() => formatBreakdown(summary?.alcohol), [summary?.alcohol]);
  const mealSummary = useMemo(() => formatBreakdown(summary?.meal), [summary?.meal]);

  async function openResults() {
    if (results) {
      setIsOpen(true);
      return;
    }

    const key = window.prompt("Код доступа к ответам:");

    if (!key) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/rsvp?key=${encodeURIComponent(key)}`, {
        cache: "no-store"
      });
      const data = (await response.json().catch(() => null)) as RsvpResultsResponse | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Не удалось загрузить ответы.");
      }

      setResults(data);
      setIsOpen(true);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Не удалось загрузить ответы.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button className={styles.resultsTrigger} disabled={isLoading} onClick={openResults} type="button">
        {isLoading ? "..." : "Ответы"}
      </button>

      {error ? (
        <div className={styles.resultsToast} role="status">
          {error}
        </div>
      ) : null}

      {isOpen ? (
        <div className={styles.resultsBackdrop} role="dialog" aria-modal="true" aria-labelledby="rsvp-results-title">
          <div className={styles.resultsPanel}>
            <div className={styles.resultsHeader}>
              <div>
                <p className={styles.resultsKicker}>RSVP</p>
                <h2 id="rsvp-results-title">Ответы гостей</h2>
              </div>
              <button className={styles.resultsClose} onClick={() => setIsOpen(false)} type="button" aria-label="Закрыть">
                x
              </button>
            </div>

            <div className={styles.resultsSummaryGrid}>
              <div>
                <span>Всего</span>
                <strong>{summary?.total ?? 0}</strong>
              </div>
              <div>
                <span>Будут</span>
                <strong>{summary?.attending ?? 0}</strong>
              </div>
              <div>
                <span>Не будут</span>
                <strong>{summary?.notAttending ?? 0}</strong>
              </div>
              <div>
                <span>Трансфер</span>
                <strong>{summary?.needsTransfer ?? 0}</strong>
              </div>
            </div>

            <div className={styles.resultsBreakdown}>
              <p>
                <strong>Алкоголь:</strong> {alcoholSummary}
              </p>
              <p>
                <strong>Блюда:</strong> {mealSummary}
              </p>
            </div>

            {hasResults ? (
              <div className={styles.resultsList}>
                {submissions.map((submission) => (
                  <article className={styles.resultsItem} key={submission.id}>
                    <div className={styles.resultsItemHeader}>
                      <strong>{submission.name}</strong>
                      <span>{formatSubmittedAt(submission.submittedAt)}</span>
                    </div>
                    <dl>
                      <div>
                        <dt>Присутствие</dt>
                        <dd>{submission.attendance}</dd>
                      </div>
                      <div>
                        <dt>Алкоголь</dt>
                        <dd>{submission.alcohol}</dd>
                      </div>
                      <div>
                        <dt>Блюдо</dt>
                        <dd>{submission.meal}</dd>
                      </div>
                      <div>
                        <dt>Трансфер</dt>
                        <dd>{submission.transfer}</dd>
                      </div>
                      <div>
                        <dt>Аллергии</dt>
                        <dd>{submission.allergies || "Не указаны"}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            ) : (
              <p className={styles.resultsEmpty}>Ответов пока нет.</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

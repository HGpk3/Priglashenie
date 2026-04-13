"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetIso: string;
  className?: string;
  itemClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
};

type CountdownPart = {
  label: string;
  value: number;
};

function getParts(targetIso: string): CountdownPart[] {
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

export function Countdown({
  targetIso,
  className,
  itemClassName,
  valueClassName,
  labelClassName
}: CountdownProps) {
  const [parts, setParts] = useState<CountdownPart[]>(() => getParts(targetIso));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParts(getParts(targetIso));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [targetIso]);

  return (
    <div className={className}>
      {parts.map((part) => (
        <div className={itemClassName} key={part.label}>
          <span className={valueClassName}>{String(part.value).padStart(2, "0")}</span>
          <span className={labelClassName}>{part.label}</span>
        </div>
      ))}
    </div>
  );
}

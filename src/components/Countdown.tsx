"use client";
import { useEffect, useState } from "react";

export default function Countdown({ deadline }: { deadline: string }) {
  const [diff, setDiff] = useState(() => Date.parse(deadline) - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(Date.parse(deadline) - Date.now()), 1000);
    return () => clearInterval(id);
  }, [deadline]);

  if (diff <= 0) return <span className="text-red-600 font-semibold">Hết hạn</span>;

  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  return (
    <span className="text-lg font-semibold">{d}d {h}h {m}m</span>
  );
}

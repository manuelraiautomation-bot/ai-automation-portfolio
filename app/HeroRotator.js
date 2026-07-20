"use client";

import { useEffect, useState } from "react";

const WORDS = ["boring workflows", "manual data entry", "slow handoffs", "repetitive tasks"];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const interval = setInterval(() => {
      if (prefersReduced) {
        setIndex((i) => (i + 1) % WORDS.length);
        return;
      }
      setSwapping(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setSwapping(false);
      }, 260);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`heroRotatorWord${swapping ? " isSwapping" : ""}`}>
      {WORDS[index]}
    </span>
  );
}

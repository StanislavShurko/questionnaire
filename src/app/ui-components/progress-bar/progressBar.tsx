'use client';
import React from "react";
import styles from "./progressBar.module.scss"

interface ProgressBarProps {
  max: number;
  current: number;
  leftLabel?: string;
  rightLabel?: string;
}

export default function ProgressBar({ leftLabel, rightLabel, max, current }: ProgressBarProps) {
  return <div className={styles["progress-bar-container"]}>
    <div className={styles["progress-bar-labels-container"]}>
      {leftLabel && <div className={styles["progress-bar-label"]}>{leftLabel}</div>}
      {rightLabel && <div className={styles["progress-bar-label"]}>{rightLabel}</div>}
    </div>
    <progress value={current} max={max} />
  </div>;
}

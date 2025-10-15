"use client";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const [question, setQuestion] = React.useState("");

  return (
    <div className={styles.mainContainer}>
      <div>Ask question</div>
      <div>
        <input
          type="text"
          className={styles.input}
          placeholder="Type here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
    </div>
  );
}

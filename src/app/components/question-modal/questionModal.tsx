'use client';
import React from "react";
import styles from "./questionModal.module.scss";
import Input from "@/app/ui-components/input/input";
import Button from "@/app/ui-components/button/button";

interface QuestionModalProps {
  onSubmit: (topic: string) => void;
}

export default function QuestionModal({ onSubmit }: QuestionModalProps) {
  const [question, setQuestion] = React.useState("");

  const generateQuestions = () => {
    onSubmit(question)
  }

  return (
    <div className={styles['ask-container']}>
      <div>
        <div className={styles['ask-title']}>AI Quiz Generator</div>
        <div className={styles['ask-sub-title']}>Enter any topic and get instant quiz questions powered by AI</div>
      </div>
      <Input placeholder="e.g., Science, World History, JavaScript..." value={question} onChange={(e) => setQuestion(e.target.value)} />
      <Button disabled={!question.length} onClick={generateQuestions}>Generate Quiz</Button>
    </div>
  );
}

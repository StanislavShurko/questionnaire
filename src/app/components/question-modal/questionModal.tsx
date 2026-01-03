import React from "react";
import styles from "./questionModal.module.scss";
import Input from "@/app/ui-components/input/input";
import Button from "@/app/ui-components/button/button";
import { getQuestions } from "@/app/services/api";
import { Question } from "@/app/data/questions";

interface QuestionModalProps {
  onSubmit: (topic: string, questions: Question[]) => void;
}

export default function QuestionModal({ onSubmit }: QuestionModalProps) {
  const [topic, setTopic] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const generateQuestions = async () => {
    setLoading(true);
    const questions = await getQuestions(topic);
    console.log('asdhfkjlasdblvkajsbdvlkjasdv', questions);
    setLoading(false);
    onSubmit(topic, questions);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateQuestions();
    }
  };

  if (loading) {
    return (
      <div className={styles['loading-container']}>
        <div className={styles['loading-spinner']}></div>
        <div className={styles['loading-text']}>Loading...</div>
      </div>
    )
  }

  return (
    <div className={styles['ask-container']}>
      <div>
        <div className={styles['ask-title']}>AI Quiz Generator</div>
        <div className={styles['ask-sub-title']}>Enter any topic and get instant quiz questions powered by AI</div>
      </div>
      <Input
        placeholder="e.g., Science, World History, JavaScript..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button disabled={!topic.length} onClick={generateQuestions}>Generate Quiz</Button>
    </div>
  );
}

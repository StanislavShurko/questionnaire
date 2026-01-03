'use client';
import React from "react";
import styles from "./quiz.module.scss";
import ProgressBar from "@/app/ui-components/progress-bar/progressBar";
import { Question } from "@/app/data/questions";
import Button from "@/app/ui-components/button/button";

interface QuizProps {
  topic: string;
  questions: Question[];
  onFinish: (score: number, total: number) => void;
}

interface SummaryItem {
  question: string;
  isCorrect: boolean;
}

export default function Quiz({ topic, questions, onFinish }: QuizProps) {
  const topicData = questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [rightAnswersCount, setRightAnswersCount] = React.useState(0);
  const [showSummary, setShowSummary] = React.useState(false);
  const [summary, setSummary] = React.useState<SummaryItem[]>([]);

  const topicDataQuestion = topicData[currentQuestionIndex];

  const leftLabel = `Question ${currentQuestionIndex + 1} of ${topicData.length}`;
  const rightLabel = `Score: ${rightAnswersCount} of ${topicData.length}`;

  const answerQuestion = (answer: string) => {
    const isCorrect = answer === topicDataQuestion.correct;

    setSummary((prev) => [
      ...prev,
      {
        question: topicDataQuestion.question,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setRightAnswersCount(rightAnswersCount + 1);
    }

    if (topicData.length !== currentQuestionIndex + 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSummary(true);
    }
  }

  if (showSummary) {
    return (
      <div className={styles["quiz-container"]}>
        <div className={styles["question-title"]}>Quiz Summary</div>
        <div className={styles["summary-score"]}>
          You scored {rightAnswersCount} out of {topicData.length}!
        </div>
        <ul className={styles["summary-list"]}>
          {summary.map((item, idx) => (
            <li key={idx} className={styles["summary-item"]}>
              <span className={styles["summary-question"]}>{item.question}</span>
              <span className={item.isCorrect ? styles["correct"] : styles["incorrect"]}>
                {item.isCorrect ? "✔️" : "❌"}
              </span>
            </li>
          ))}
        </ul>
        <Button
          className={styles["summary-restart"]}
          onClick={() => {
            setShowSummary(false);
            onFinish(rightAnswersCount, topicData.length);
          }}
        >
          Restart Quiz
        </Button>
      </div>
    );
  }

  return <div className={styles["quiz-container"]}>
    <ProgressBar max={topicData.length} current={currentQuestionIndex} leftLabel={leftLabel} rightLabel={rightLabel}></ProgressBar>
    <div className={styles["question-title"]}>{topicDataQuestion.question}</div>
    <div className={styles["answers-container"]}>
      {topicDataQuestion.answers.map((answer) => {
        return <button key={answer} className={styles["question-answer"]} onClick={() => answerQuestion(answer)}>{answer}</button>
      })}
    </div>
  </div >;
}

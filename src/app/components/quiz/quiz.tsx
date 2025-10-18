'use client';
import React from "react";
import styles from "./quiz.module.scss";
import ProgressBar from "@/app/ui-components/progress-bar/progressBar";
import questions from "@/app/data/questions";

interface QuizProps {
  topic: string;
  onFinish: (score: number, total: number) => void;
}

export default function Quiz({ topic, onFinish }: QuizProps) {
  const topicData = questions[topic] ?? questions["worldHistory"];

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [rightAnswersCount, setRightAnswersCount] = React.useState(0);

  const topicDataQuestion = topicData[currentQuestionIndex];

  const leftLabel = `Question ${currentQuestionIndex + 1} of ${topicData.length}`;
  const rightLabel = `Score: ${rightAnswersCount} of ${topicData.length}`;

  const answerQuestion = (answer: string) => {
    if (answer === topicDataQuestion.correct) {
      setRightAnswersCount(rightAnswersCount + 1);
    }
    if (topicData.length !== currentQuestionIndex + 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(rightAnswersCount, topicData.length);
    }
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

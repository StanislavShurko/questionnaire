"use client";
import React from "react";
import QuestionModal from "./components/question-modal/questionModal";
import Quiz from "./components/quiz/quiz";
import { Question } from "./data/questions";

export default function Home() {
  const [topic, setTopic] = React.useState<string | null>(null);
  const [questions, setQuestions] = React.useState<Question[]>([]);

  if (!topic) {
    return <QuestionModal onSubmit={(t: string, q: Question[]) => { setTopic(t); setQuestions(q); }} />;
  }

  return <Quiz topic={topic} questions={questions} onFinish={() => setTopic(null)} />;
}

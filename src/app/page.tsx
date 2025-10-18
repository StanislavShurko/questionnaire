"use client";
import React from "react";
import QuestionModal from "./components/question-modal/questionModal";
import Quiz from "./components/quiz/quiz";

export default function Home() {
  const [topic, setTopic] = React.useState<string | null>(null);

  if (!topic) {
    return <QuestionModal onSubmit={(t) => { setTopic(t); }} />;
  }

  return <Quiz topic={topic} onFinish={() => setTopic(null)} />;
}

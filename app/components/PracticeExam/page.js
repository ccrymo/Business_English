"use client";

import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import Question from "./UI/Question";
import ReadingText from "./UI/ReadingText";
import SubmitButton from "./UI/SubmitButton";
import Header from "./UI/Header";
import quizData from "../../data/practiceExam/practiceExam";

export default function Home() {
  const [currentQuestionSet, setCurrentQuestionSet] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [isReadingVisible, setIsReadingVisible] = useState(true);

  const readingTextContent = quizData.readingText;
  const readingTextTitle = quizData.readingTextTitle;

  useEffect(() => {
    const totalSets = Object.keys(quizData).filter((key) =>
      key.startsWith("questions")
    ).length;
    setTotalQuestions(totalSets);
  }, []);

  const handleSelect = (questionNumber, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question${currentQuestionSet}_${questionNumber}`]: option,
    }));
    setIsAnswerSelected(true);
  };

  const handleSubmit = () => {
    console.log("Submitted answer:", answers);
    const questionSet = quizData[`questions${currentQuestionSet}`];
    const currentQuestion = questionSet[currentQuestionIndex];

    // Check if the selected answer is correct
    const selectedAnswer = answers[`question${currentQuestionSet}_${currentQuestion.number}`];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex < questionSet.length - 1) {
      // Move to the next question in the current set
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (currentQuestionSet < totalQuestions) {
      // Move to the next question set
      setCurrentQuestionSet((prevSet) => prevSet + 1);
      setCurrentQuestionIndex(0);
      setAnswers({});
    } else {
      console.log("Quiz completed!");
      // Add logic for quiz completion
    }

    // Reset answer selection state
    setIsAnswerSelected(false);
  };

  const renderQuestions = () => {
    const questionSet = quizData[`questions${currentQuestionSet}`];
    if (!questionSet || currentQuestionIndex >= questionSet.length) return null;

    const q = questionSet[currentQuestionIndex];
    const selectedAnswer = answers[`question${currentQuestionSet}_${q.number}`];
    return (
      <Question
        key={q.number}
        question={q.question}
        options={q.options}
        onSelect={(option) => handleSelect(q.number, option)}
        type={q.title ? q.title : "Multiple Choice"}
        instruction={q.instruction}
        selectedAnswer={selectedAnswer}
      />
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsReadingVisible(false),
    onSwipedRight: () => setIsReadingVisible(true),
    trackMouse: true
  });

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Reading Comprehension Quiz"
        currentQuestion={(currentQuestionIndex + 1).toString()}
        totalQuestions={quizData[`questions${currentQuestionSet}`].length.toString()}
        correctAnswers={correctAnswers}
      />
      <div className="relative lg:w-1/2 md:1/2 sm:h-screen" {...handlers}>
        <div 
          className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
            isReadingVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ReadingText content={readingTextContent} title={readingTextTitle} />
        </div>
        <div 
          className={`absolute lg:w-1/2 md:1/2 sm:h-screeninset-0 p-4 overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isReadingVisible ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h2 className="text-xl font-bold mb-4">
            Question Set {currentQuestionSet}
          </h2>
          {renderQuestions()}
          <SubmitButton onClick={handleSubmit} disabled={!isAnswerSelected} />
        </div>
      </div>
    </div>
  );
}
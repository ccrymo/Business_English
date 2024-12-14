"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Question from "./UI/Question";
import ReadingText from "./UI/ReadingText";
import SubmitButton from "./UI/SubmitButton";
import Header from "./UI/Header";
import CompletionModal from "./UI/CompletionModal";
import quizData from "../../data/practiceExam/practiceExam";

export default function Home() {
  const [currentQuestionSet, setCurrentQuestionSet] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [isReadingVisible, setIsReadingVisible] = useState(true);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const readingTextContent = quizData.readingText;
  const readingTextTitle = quizData.readingTextTitle;

  useEffect(() => {
    // Calculate total questions across all sets
    const totalQuestionsCount = Object.keys(quizData)
      .filter((key) => key.startsWith("questions"))
      .reduce((total, key) => total + quizData[key].length, 0);

    setTotalQuestions(totalQuestionsCount);
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
    const selectedAnswer =
      answers[`question${currentQuestionSet}_${currentQuestion.number}`];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex < questionSet.length - 1) {
      // Move to the next question in the current set
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (
      currentQuestionSet <
      Object.keys(quizData).filter((key) => key.startsWith("questions")).length
    ) {
      // Move to the next question set
      setCurrentQuestionSet((prevSet) => prevSet + 1);
      setCurrentQuestionIndex(0);
      setAnswers({});
    } else {
      console.log("Quiz completed!");
      setIsQuizCompleted(true);
    }

    // Reset answer selection state
    setIsAnswerSelected(false);
  };

  // Calculate current overall question number
  const getCurrentOverallQuestionNumber = () => {
    let previousQuestionsCount = 0;

    for (let i = 1; i < currentQuestionSet; i++) {
      previousQuestionsCount += quizData[`questions${i}`].length;
    }

    return previousQuestionsCount + currentQuestionIndex + 1; // +1 because index is zero-based
  };

  const renderQuestions = () => {
    const questionSet = quizData[`questions${currentQuestionSet}`];
    if (!questionSet || currentQuestionIndex >= questionSet.length) return null;

    const q = questionSet[currentQuestionIndex];
    return (
      <Question
        key={q.number}
        question={q.question}
        options={q.options}
        onSelect={(option) => handleSelect(q.number, option)}
        type={q.title ? q.title : "Multiple Choice"}
        instruction={q.instruction}
        selectedAnswer={answers[`question${currentQuestionSet}_${q.number}`]}
      />
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsReadingVisible(false),
    onSwipedRight: () => setIsReadingVisible(true),
    trackMouse: true,
  });

  const handleCloseModal = () => {
    setIsQuizCompleted(false);
    // Add any additional reset logic here if needed
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        currentQuestion={getCurrentOverallQuestionNumber()}
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
      />

<div className="flex-1 overflow-hidden pt-5">
  <div className="relative h-full" {...handlers}>
    <div
      className={`absolute inset-2 transition-transform duration-300 ease-in-out ${
        isReadingVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ReadingText
        content={readingTextContent}
        title={readingTextTitle}
      />
    </div>

          <div
            className={`absolute mt-20 inset-2 p-4 overflow-y-auto transition-opacity duration-300 ease-in-out ${
              isReadingVisible ? "opacity-0" : "opacity-100"
            }`}
          >
            {renderQuestions()}
            <SubmitButton onClick={handleSubmit} disabled={!isAnswerSelected} />
          </div>
        </div>
      </div>
      {isQuizCompleted && (
        <CompletionModal
          score={correctAnswers}
          totalQuestions={totalQuestions}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

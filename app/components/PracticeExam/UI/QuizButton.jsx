import React from "react";
import ReadingTextIMG from "@/app/img/ReadingTextIMG";
import QuizButtonIMG from "@/app/img/QuizButtonIMG";

const QuizButton = ({ isQuestionView, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-0 left-0 w-full p-4 bg-amber-400 text-neutral-800 font-bold text-xl md:hidden flex items-center justify-center gap-2">
      {isQuestionView ? (
        <>
          <span>Read</span>
          <ReadingTextIMG className="w-6 h-6" />
        </>
      ) : (
        <>
          <span>Test</span>
          <QuizButtonIMG className="w-6 h-6" />
        </>
      )}
    </button>
  );
};

export default QuizButton;

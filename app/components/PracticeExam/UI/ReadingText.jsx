"use client";
import React from "react";
import QuizButton from "./QuizButton";

export default function ReadingText({ content, title, onQuizButtonClick }) {
  return (
    <div className="mt-10 mb-10 flex flex-col h-full overflow-hidden ">
      <div className="flex-1 overflow-y-auto px-4 md:px-20 border-r border-gray-300 text-white bg-neutral-950 scrollbar-wider">
        <div className="py-10 mx-4">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-4xl font-bold text-amber-400 font-caveat-brush">
              {title}
            </h2>
            <QuizButton onClick={onQuizButtonClick} />
          </div>
          <p className="text-xl outfit-textFont">{content}</p>
        </div>
      </div>
    </div>
  );
}

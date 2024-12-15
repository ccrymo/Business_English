"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import OverlayMessage from "./OverlayMessage";
const Question = ({
  question,
  options,
  onSelect,
  selectedAnswer,
  showOverlay,
  isCorrect,
  onOverlayClose,
}) => {
  return (
    <div className="mb-4 overflow-y-auto scroll scrollbar-thin scrollbar-thumb-gray-400">
      <h3 className="mb-4 text-2xl font-bold text-center">{question}</h3>
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onSelect(option)}
          colour="red"
          isSelected={option === selectedAnswer}>
          {option}
        </Button>
      ))}
      <OverlayMessage
        message={isCorrect ? "Correct!👌" : "Wrong 🤕"}
        isVisible={showOverlay}
        onClose={onOverlayClose}
      />
    </div>
  );
};

export default Question;

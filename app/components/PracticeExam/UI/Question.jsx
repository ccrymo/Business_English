"use client";
import Button from "./Button";

const Question = ({ question, options, onSelect, selectedAnswer }) => {
  return (
    <div className="mb-4 overflow-y-auto scroll scrollbar-thin scrollbar-thumb-gray-400">
      <h3 className="mt-5 mb-1 text-lg text-center">{question}</h3>
      {options.map((option, index) => (
        <Button 
          key={index} 
          onClick={() => onSelect(option)} 
          colour="red"
          isSelected={option === selectedAnswer}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
export default Question;

import { useState, useEffect } from "react";

const Header = ({
  title,
  currentQuestion,
  totalQuestions,
  correctAnswers,
  timeLimit = 3600,
  onTimeUp,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          onTimeUp?.(); // Call onTimeUp when timer completes
          return 100;
        }
        return prevProgress + 100 / (timeLimit * 10);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentQuestion, timeLimit, onTimeUp]);

  const getColor = () => {
    if (progress < 50) return "bg-green-500";
    if (progress < 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <header className="bg-stone-800 text-white p-4 flex justify-between items-center shadow-lg filter drop-shadow-2xl">
        <div className="flex flex-row text-lg items-center">
          <h1 className="text-2xl font-bold">Grade:</h1>
          <p className="text-lg ml-5">{correctAnswers} / 53%</p>
        </div>
        <div className="flex flex-row text-lg items-center">
          <span className="font-bold mr-2">Question</span>
          <span className="mr-2">{currentQuestion}</span>
          <span className="font-bold mr-2">of</span> {totalQuestions}
        </div>
      </header>
      <div className="h-3 w-full bg-stone-700">
        <div
          className={`h-full transition-all duration-100 ease-linear ${getColor()}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Header;

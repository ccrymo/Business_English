const Header = ({ title, currentQuestion, totalQuestions, correctAnswers }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-stone-800 text-white p-4 flex justify-between items-center shadow-lg filter drop-shadow-2xl">
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
  );
};

export default Header;

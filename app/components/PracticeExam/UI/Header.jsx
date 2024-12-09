// components/Header.jsx

const Header = ({ title, currentQuestion, totalQuestions, correctAnswers }) => {
    return (
      <header className="bg-stone-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-row mr-5 text-lg">
        <p className="text-lg mr-10">Score: {correctAnswers}</p>
          <span className="font-bold mr-2">Question</span> <span className=" mr-2">{currentQuestion}</span> <span className="font-bold mr-2">of</span> {totalQuestions}
        </div>
      </header>
    );
  };
  
  export default Header;

// UI/CompletionModal.js
import React from 'react';
import Button from './Button';
const CompletionModal = ({ score, totalQuestions, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-neutral-600 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Well done!</h2>
        <p className="text-xl mb-6">You've completed the quiz!</p>
        <p className="text-lg mb-8">Your grade: <span className='font-bold'>{score}</span> / <span className='font-bold mr-1'>{totalQuestions}</span>%</p>
        <Button 
          onClick={onClose}
          colour="gray"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default CompletionModal;
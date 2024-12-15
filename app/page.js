import Link from "next/link";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-20 rounded-lg relative">
        <h2 className="text-3xl font-bold text-white mb-6">Choose the slide</h2>
        <div className="flex flex-col space-y-4 ">
          <Link href="./components/Reading">
            <button className="w-full  text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-red-700 hover:to-red-950 hover:text-white text-white">
              Vocabulary
            </button>
          </Link>
          <Link href="./components/PrepExam">
            <button className="w-full text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-red-700 hover:to-red-950 hover:text-white text-white">
              Exam Slides
            </button>
          </Link>

          <div className="relevent pt-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Mock Exams:
            </h2>
            <Link href="./components/PracticeExam">
              <button className="w-full text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-rose-700 hover:to-rose-950 hover:text-white text-white">
                Final Reading Practice Exam 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

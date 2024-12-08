import Link from "next/link";

export default function Home() {
  const chapters = [
    { id: 1, title: "Chapter 1", path: "../../books/reading/chapters/ch1" },
    { id: 2, title: "Chapter 2", path: "../../books/reading/chapters/ch2" },
    { id: 3, title: "Chapter 3", path: "../../books/reading/chapters/ch3" },
    { id: 4, title: "Chapter 4", path: "../../books/reading/chapters/ch4" },
    { id: 5, title: "Chapter 5", path: "../../books/reading/chapters/ch5" },
    { id: 6, title: "Chapter 6", path: "../../books/reading/chapters/ch6" },
    { id: 7, title: "Chapter 7", path: "../../books/reading/chapters/ch7" },
    { id: 8, title: "Chapter 8", path: "../../books/reading/chapters/ch8" },
  ];

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="flex flex-col mb-10 items-center justify-center top-0 text-3xl md:text-4xl lg:text-6xl font-bold text-red-600">
        Business
        <div className="text-gray-200">Reading</div>
      </h1>
      <div className="flex flex-wrap justify-center w-full max-w-4xl">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="w-1/2 p-2">
            <Link
              href={chapter.path}
              className="text-2xl md:text-3xl lg:text-4xl font-bold hover:text-sky-200"
            >
              <button className="w-full bg-gradient-to-r from-neutral-700 to-neutral-900 hover:from-red-600 hover:to-red-900 hover:text-red-950 text-white font-bold py-4 px-4 items-center">
                {chapter.title}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
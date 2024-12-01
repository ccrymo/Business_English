import WordPage from '../../../../components/Words/WordPage'
import { chapter_05 } from "@/app/data/reading/chapter_05";


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <WordPage chapter={chapter_05}/>
    </div>
  );
} 
import { SecondsCounter, SecondsCounterWithTimer } from "@/components/SecondsCounter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <SecondsCounter seconds={999} />
      <SecondsCounterWithTimer/>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex items-center justify-center text-black flex-col gap-8">
      <h1 className="text-red-500 text-3xl font-bold text-center">
        Hello Electron + React + Tailwind! Basic Counter App!
      </h1>
      <div className="text-3xl font-bold">{count}</div>
      <div className="flex flex-row gap-4">
        <button
          className="border border-black p-4 rounded-sm cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="border border-black p-4 rounded-sm cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <Link to={"/user"}>Users Page</Link>
    </div>
  );
}

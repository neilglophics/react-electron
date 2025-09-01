import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="flex items-center justify-center text-black flex-col gap-8 w-screen h-screen">
      <div className="flex flex-row items-center gap-4 mb-8">
        logo
        <h1 className="text-3xl font-bold text-center">Invoice System</h1>
      </div>
      <Link
        to={"/user"}
        className="bg-[#0FB799] w-1/2 text-center p-2 rounded-lg text-white font-bold"
      >
        QR Mode
      </Link>
      <Link
        to={"/user"}
        className="bg-black text-white w-1/2 p-2 rounded-lg font-bold text-center"
      >
        Configurations
      </Link>
    </section>
  );
}

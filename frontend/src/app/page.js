import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6 text-center">
      <h1 className="text-5xl font-extrabold text-slate-800 mb-4">
        Product Management Dashboard
      </h1>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

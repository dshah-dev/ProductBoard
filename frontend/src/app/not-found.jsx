import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-slate-400">
          404
          <span className="flex items-center justify-center text-3xl text-slate-700 mt-4">
            Page Not Found
          </span>
        </h1>

        <div className="mt-8">
          <p className="text-slate-500 text-lg mb-8">
            Oops! The page you are looking for doesn't exist .
          </p>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl  shadow-lg shadow-blue-200 active:scale-95"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

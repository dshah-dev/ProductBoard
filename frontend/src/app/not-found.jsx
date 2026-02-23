import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 transition-colors duration-300">
      <div className="text-center max-w-md">
        <div className="relative inline-block mb-8">
          <h1 className="text-[12rem] font-black text-muted/10 tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black tracking-tighter uppercase">
              Lost in space
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-muted text-xl font-medium leading-relaxed">
            The page you're looking for has been moved or doesn't exist in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="btn-base bg-primary-brand text-white px-8 py-4 rounded-2xl shadow-2xl shadow-primary-brand/30 hover:shadow-primary-brand/50 hover:-translate-y-1 transition-all"
            >
              Back to Dashboard
             </Link>
            
            <Link
              href="/"
              className="btn-base bg-card border border-border-base text-foreground px-8 py-4 rounded-2xl hover:bg-muted/5 transition-all"
            >
              Visit Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
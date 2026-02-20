import Skeleton from "@/common/components/skeleton";

export default function DashboardLoading() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <Skeleton width="200px" height="32px" />
        <Skeleton width="350px" height="20px" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm"
          >
            <Skeleton width="100px" height="16px" className="mb-4" />
            <Skeleton width="60px" height="32px" />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-100 h-64 shadow-sm">
        <Skeleton width="150px" height="24px" className="mb-6" />
        <div className="space-y-4">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      </div>
    </div>
  );
}

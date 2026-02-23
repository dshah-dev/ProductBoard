import Skeleton from "@/common/components/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4">
        <Skeleton width="240px" height="40px" className="rounded-xl" />
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="flex-1 h-12" />
          <Skeleton width="180px" height="48px" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-card p-5 rounded-2xl border border-border-base shadow-sm"
          >
            <Skeleton width="60%" height="12px" className="mb-3" />
            <Skeleton width="40%" height="24px" />
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <Skeleton width="150px" height="20px" className="ml-2" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="bg-card border border-border-base rounded-2xl p-0 overflow-hidden">
              <Skeleton className="aspect-square rounded-none" />
              <div className="p-4 space-y-3">
                <Skeleton width="80%" height="14px" />
                <div className="flex justify-between items-center pt-2">
                  <Skeleton width="40%" height="20px" />
                  <Skeleton width="32px" height="32px" className="rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
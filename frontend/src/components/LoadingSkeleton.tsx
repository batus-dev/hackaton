export default function LoadingSkeleton() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {[...Array(4)].map((_, index) => (
        <div 
          key={index} 
          className="bg-surface border border-border rounded-lg overflow-hidden animate-pulse"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[180px_1fr] gap-4 p-4">
            <div className="bg-surface-2 aspect-[2/3] rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div>
                <div className="h-5 bg-surface-2 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-surface-2 rounded w-1/2"></div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-surface-2 rounded w-full"></div>
                <div className="h-4 bg-surface-2 rounded w-4/6"></div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <div className="h-11 bg-surface-2 rounded-lg w-20"></div>
                <div className="h-11 w-11 bg-surface-2 rounded-lg"></div>
                <div className="h-11 w-11 bg-surface-2 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-surface-2 aspect-[2/3] w-full"></div>
            <div className="p-4 flex flex-col gap-2">
              <div>
                <div className="h-5 bg-surface-2 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-surface-2 rounded w-1/2"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-surface-2 rounded w-full"></div>
                <div className="h-4 bg-surface-2 rounded w-4/6"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-11 bg-surface-2 rounded-lg flex-1"></div>
                <div className="h-11 w-11 bg-surface-2 rounded-lg"></div>
                <div className="h-11 w-11 bg-surface-2 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
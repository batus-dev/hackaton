export default function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, index) => (
        <div 
          key={index} 
          className="bg-surface border border-border rounded-lg overflow-hidden animate-pulse"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[240px_1fr] gap-4 p-4">
            <div className="bg-surface-2 aspect-[2/3] rounded-md"></div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="h-6 bg-surface-2 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-surface-2 rounded w-1/2"></div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-surface-2 rounded w-full"></div>
                <div className="h-4 bg-surface-2 rounded w-5/6"></div>
                <div className="h-4 bg-surface-2 rounded w-4/6"></div>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-12 bg-surface-2 rounded-lg w-24"></div>
                <div className="h-12 w-12 bg-surface-2 rounded-lg"></div>
                <div className="h-12 w-12 bg-surface-2 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="bg-surface-2 aspect-[2/3] w-full"></div>
            <div className="p-4 flex flex-col gap-3">
              <div>
                <div className="h-6 bg-surface-2 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-surface-2 rounded w-1/2"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-surface-2 rounded w-full"></div>
                <div className="h-4 bg-surface-2 rounded w-4/6"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 bg-surface-2 rounded-lg flex-1"></div>
                <div className="h-12 w-12 bg-surface-2 rounded-lg"></div>
                <div className="h-12 w-12 bg-surface-2 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
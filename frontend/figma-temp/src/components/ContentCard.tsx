import { Star, Play, Info, Plus, ThumbsUp } from "lucide-react";
import { cn } from "./ui/utils";

interface ContentCardProps {
  title: string;
  thumbnail: string;
  rating?: number;
  year?: number;
  genre?: string;
  seasons?: string;
  duration?: string;
  ageRating?: string;
  description: string;
  type?: 'movie' | 'series' | 'documentary';
  className?: string;
}

export function ContentCard({
  title,
  thumbnail,
  rating,
  year,
  genre,
  seasons,
  duration,
  ageRating = "+16",
  description,
  type = 'series',
  className
}: ContentCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#15171B] p-2 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl",
      className
    )}>
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="relative h-[263px] w-[175px] flex-shrink-0 overflow-hidden rounded-xl">
          <img 
            src={thumbnail} 
            alt={title}
            className="h-full w-full object-cover"
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#21DBAA] text-black hover:bg-[#1BC999]">
              <Play className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between py-4">
          {/* Title and rating */}
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            
            {/* Rating */}
            {rating && (
              <div className="mb-3 flex items-center gap-1">
                <span className="text-xs text-neutral-200">IMDb {rating}</span>
                <Star className="h-3 w-3 fill-[#F5D600] text-[#F5D600]" />
              </div>
            )}
            
            {/* Details */}
            <div className="mb-4 flex items-center gap-2 text-xs text-[#C4C4C4]">
              <span>{seasons || year} | {genre} | {duration}</span>
              {ageRating && (
                <div className="flex h-6 w-8 items-center justify-center rounded-sm bg-[#555555] text-xs font-bold text-white">
                  {ageRating}
                </div>
              )}
            </div>
            
            {/* Description */}
            <p className="mb-6 line-clamp-3 text-sm text-white leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-12 items-center justify-center rounded-full bg-[#21DBAA] text-black hover:bg-[#1BC999]">
              <Play className="h-5 w-5" />
            </button>
            
            <button className="flex h-6 w-6 items-center justify-center text-white hover:text-[#21DBAA]">
              <Plus className="h-5 w-5" />
            </button>
            
            <button className="flex h-6 w-6 items-center justify-center text-white hover:text-[#21DBAA]">
              <ThumbsUp className="h-5 w-5" />
            </button>
            
            <button className="flex h-6 w-6 items-center justify-center text-white hover:text-[#21DBAA]">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export type Content =
  | {
      id: string
      type: 'movie'
      title: string
      genres: string[]
      durationMinutes: number
      parentalRating: string
      description: string
      posterUrl: string
      rating?: number
    }
  | {
      id: string
      type: 'series'
      title: string
      genres: string[]
      seasons: number
      parentalRating: string
      description: string
      posterUrl: string
      rating?: number
    }

export type ContentItem = {
  id: string;
  title: string;
  year: number;
  seasons?: number;
  genres: string[];
  rating?: string;
  synopsis: string;
  posterUrl: string;
  backdropUrl?: string;
}

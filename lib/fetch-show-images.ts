// Fetch images for curated shows using TMDB search
const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

interface TMDBSearchResult {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  media_type?: 'movie' | 'tv';
}

export async function getShowImage(title: string): Promise<{ poster: string; backdrop: string; rating: number }> {
  try {
    // Search TMDB for the show
    const response = await fetch(
      `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`
    );
    
    if (!response.ok) {
      return getDefaultImage(title);
    }
    
    const data = await response.json();
    const results: TMDBSearchResult[] = data.results || [];
    
    if (results.length === 0) {
      return getDefaultImage(title);
    }
    
    // Get first result
    const show = results[0];
    
    return {
      poster: show.poster_path 
        ? `${IMAGE_BASE_URL}/w500${show.poster_path}`
        : getDefaultImage(title).poster,
      backdrop: show.backdrop_path
        ? `${IMAGE_BASE_URL}/w1280${show.backdrop_path}`
        : getDefaultImage(title).backdrop,
      rating: show.vote_average || 8.0,
    };
  } catch (error) {
    console.error('Error fetching image for', title, error);
    return getDefaultImage(title);
  }
}

function getDefaultImage(title: string) {
  // Generate a gradient based on title
  const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  
  return {
    poster: `https://via.placeholder.com/500x750/000000/ffffff?text=${encodeURIComponent(title)}`,
    backdrop: `https://via.placeholder.com/1280x720/000000/ffffff?text=${encodeURIComponent(title)}`,
    rating: 8.0,
  };
}

// Cache for images (in-memory)
const imageCache = new Map<string, { poster: string; backdrop: string; rating: number }>();

export async function getShowImageCached(title: string) {
  if (imageCache.has(title)) {
    return imageCache.get(title)!;
  }
  
  const image = await getShowImage(title);
  imageCache.set(title, image);
  return image;
}


// TMDB API Client
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '8265bd1679663a7ea12ac168da84d2e8'; // Demo key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface TMDBMovie {
  id: number;
  title: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: 'movie' | 'tv';
}

export async function getTrending(mediaType: 'movie' | 'tv' = 'movie', timeWindow: 'day' | 'week' = 'week') {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${TMDB_API_KEY}`
    );
    
    if (!response.ok) {
      console.error('TMDB API Error:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    return (data.results || []) as TMDBMovie[];
  } catch (error) {
    console.error('Error fetching trending:', error);
    return [];
  }
}

export async function getPopular(mediaType: 'movie' | 'tv' = 'movie') {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/${mediaType}/popular?api_key=${TMDB_API_KEY}`
    );
    
    if (!response.ok) {
      console.error('TMDB API Error:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    return (data.results || []) as TMDBMovie[];
  } catch (error) {
    console.error('Error fetching popular:', error);
    return [];
  }
}

export async function getTopRated(mediaType: 'movie' | 'tv' = 'movie') {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/${mediaType}/top_rated?api_key=${TMDB_API_KEY}`
    );
    
    if (!response.ok) {
      console.error('TMDB API Error:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    return (data.results || []) as TMDBMovie[];
  } catch (error) {
    console.error('Error fetching top rated:', error);
    return [];
  }
}

export async function searchContent(query: string) {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results as TMDBMovie[];
}

export function getPosterUrl(path: string | null, size: 'w342' | 'w500' | 'original' = 'w342') {
  if (!path) return '/placeholder-poster.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

export function getBackdropUrl(path: string | null, size: 'w780' | 'w1280' | 'original' = 'w780') {
  if (!path) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}


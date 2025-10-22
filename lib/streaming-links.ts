// Generate direct links to streaming services

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '8265bd1679663a7ea12ac168da84d2e8';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export interface StreamingLink {
  service: string;
  url: string;
}

// Get external IDs for content (Netflix ID, IMDB ID, etc.)
export async function getExternalIds(contentId: number, mediaType: 'movie' | 'tv') {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/${mediaType}/${contentId}/external_ids?api_key=${TMDB_API_KEY}`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching external IDs:', error);
    return null;
  }
}

// Generate streaming service URLs
export async function getStreamingLinks(contentId: number, mediaType: 'movie' | 'tv', title: string): Promise<StreamingLink[]> {
  const links: StreamingLink[] = [];
  
  try {
    const externalIds = await getExternalIds(contentId, mediaType);
    
    // Netflix - uses their internal ID
    if (externalIds?.imdb_id) {
      // For TV shows, try to get Netflix ID
      // Netflix pattern: https://www.netflix.com/title/{netflix_id}
      // Fallback: search by title
      links.push({
        service: 'netflix',
        url: `https://www.netflix.com/search?q=${encodeURIComponent(title)}`,
      });
    }
    
    // Hulu - search by title
    links.push({
      service: 'hulu',
      url: `https://www.hulu.com/search?q=${encodeURIComponent(title)}`,
    });
    
    // Disney+ - search by title
    links.push({
      service: 'disney-plus',
      url: `https://www.disneyplus.com/search?q=${encodeURIComponent(title)}`,
    });
    
    // Amazon Prime - search by title
    links.push({
      service: 'amazon-prime',
      url: `https://www.amazon.com/s?k=${encodeURIComponent(title)}&i=instant-video`,
    });
    
    // Max (HBO) - search by title
    links.push({
      service: 'hbo-max',
      url: `https://www.max.com/search?q=${encodeURIComponent(title)}`,
    });
    
    // Apple TV+ - search by title
    links.push({
      service: 'apple-tv',
      url: `https://tv.apple.com/search?q=${encodeURIComponent(title)}`,
    });
    
  } catch (error) {
    console.error('Error generating streaming links:', error);
  }
  
  return links;
}

// Get primary streaming link (for main click action)
export function getPrimaryStreamingLink(serviceId: string, title: string): string {
  const baseUrls: Record<string, string> = {
    'netflix': `https://www.netflix.com/search?q=${encodeURIComponent(title)}`,
    'hulu': `https://www.hulu.com/search?q=${encodeURIComponent(title)}`,
    'disney-plus': `https://www.disneyplus.com/search?q=${encodeURIComponent(title)}`,
    'hbo-max': `https://www.max.com/search?q=${encodeURIComponent(title)}`,
    'apple-tv': `https://tv.apple.com/search?q=${encodeURIComponent(title)}`,
    'amazon-prime': `https://www.amazon.com/s?k=${encodeURIComponent(title)}&i=instant-video`,
    'paramount-plus': `https://www.paramountplus.com/search/?query=${encodeURIComponent(title)}`,
    'peacock': `https://www.peacocktv.com/search?q=${encodeURIComponent(title)}`,
  };
  
  return baseUrls[serviceId] || `https://www.google.com/search?q=${encodeURIComponent(title + ' streaming')}`;
}

// For specific Netflix content with known IDs
export function getNetflixDirectLink(netflixId: string): string {
  return `https://www.netflix.com/browse?jbv=${netflixId}`;
}

// Popular shows with known Netflix IDs
export const KNOWN_NETFLIX_IDS: Record<string, string> = {
  'Stranger Things': '80057281',
  'The Crown': '80025678',
  'Bridgerton': '80232398',
  'Wednesday': '81231974',
  'Squid Game': '81040344',
  'The Witcher': '80189685',
  'Ozark': '80117552',
  'Breaking Bad': '70143836',
  'Better Call Saul': '80021955',
  'The Last of Us': '81080.(hbo)',
};


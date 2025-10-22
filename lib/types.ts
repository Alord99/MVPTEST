// Streaming Service Types
export interface StreamingService {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logoUrl?: string;
}

// Content Types
export interface Content {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  overview: string;
  rating: number;
  releaseDate: string;
  type: 'movie' | 'tv';
  services: StreamingService[];
}

// Subscription Types
export interface Subscription {
  id: string;
  serviceName: string;
  amount: number;
  billingCycle: 'monthly' | 'yearly' | 'weekly';
  nextBillingDate: string;
  category: string;
  logoUrl?: string;
  managementUrl?: string;
  cancellationUrl?: string;
  status: 'active' | 'cancelled';
}

// User Types
export interface User {
  id: string;
  email: string;
  activeServices: string[];
  subscriptions: Subscription[];
}

// Popular Streaming Services with Colors
export const STREAMING_SERVICES: Record<string, StreamingService> = {
  netflix: {
    id: 'netflix',
    name: 'Netflix',
    shortName: 'NFLX',
    color: '#E50914',
  },
  hulu: {
    id: 'hulu',
    name: 'Hulu',
    shortName: 'HULU',
    color: '#1CE783',
  },
  'disney-plus': {
    id: 'disney-plus',
    name: 'Disney+',
    shortName: 'D+',
    color: '#113CCF',
  },
  'hbo-max': {
    id: 'hbo-max',
    name: 'Max',
    shortName: 'MAX',
    color: '#7B2CBF',
  },
  'apple-tv': {
    id: 'apple-tv',
    name: 'Apple TV+',
    shortName: 'ATV+',
    color: '#0071E3',
  },
  'amazon-prime': {
    id: 'amazon-prime',
    name: 'Prime Video',
    shortName: 'PRIME',
    color: '#00A8E1',
  },
  'paramount-plus': {
    id: 'paramount-plus',
    name: 'Paramount+',
    shortName: 'P+',
    color: '#0064FF',
  },
  peacock: {
    id: 'peacock',
    name: 'Peacock',
    shortName: 'PCOK',
    color: '#000000',
  },
};


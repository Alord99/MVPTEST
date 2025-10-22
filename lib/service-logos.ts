// Streaming Service Logos and Enhanced Design
// Using publicly available logo URLs and fallbacks

export const SERVICE_LOGOS: Record<string, { logo: string; icon: string }> = {
  'netflix': {
    logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
    icon: 'N',
  },
  'hulu': {
    logo: 'https://www.hulu.com/static/hitch/s3/attachments/ckfmr5tzp6tqt0754eikv2u0u-hulu-icon-green.svg',
    icon: 'H',
  },
  'disney-plus': {
    logo: 'https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85cf0e13.ico',
    icon: 'D+',
  },
  'hbo-max': {
    logo: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtNOGz2MJW6OxZL-iyE1J2e5CQDJB8RMrRFuwkGWN3IR5Cg',
    icon: 'MAX',
  },
  'apple-tv': {
    logo: 'https://www.apple.com/favicon.ico',
    icon: 'ATV+',
  },
  'amazon-prime': {
    logo: 'https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png',
    icon: 'PRIME',
  },
  'paramount-plus': {
    logo: 'https://www.paramountplus.com/favicon.ico',
    icon: 'P+',
  },
  'peacock': {
    logo: 'https://www.peacocktv.com/favicon.ico',
    icon: 'PCOK',
  },
};

// Simple SVG icons for services (fallback)
export const SERVICE_SVG_ICONS: Record<string, string> = {
  netflix: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
    </svg>
  `,
  hulu: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.707 17.657c-1.353 0-2.062-.918-2.062-2.588v-5.62h2.495v5.31c0 .655.248.918.717.918.469 0 .717-.263.717-.918v-5.31h2.495v5.62c0 1.67-.71 2.588-2.062 2.588zm-6.495 0c-1.353 0-2.062-.918-2.062-2.588v-5.62h2.495v5.31c0 .655.248.918.717.918.469 0 .717-.263.717-.918v-5.31h2.495v5.62c0 1.67-.71 2.588-2.062 2.588z"/>
    </svg>
  `,
};


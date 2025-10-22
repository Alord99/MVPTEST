import Image from 'next/image';
import { STREAMING_SERVICES } from '@/lib/types';

interface ServiceBadgeProps {
  serviceId: string;
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
}

export default function ServiceBadge({ serviceId, size = 'medium', showIcon = true }: ServiceBadgeProps) {
  const service = STREAMING_SERVICES[serviceId];
  if (!service) return null;

  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const iconSizes = {
    small: 12,
    medium: 16,
    large: 20,
  };

  // Service logo URLs (using publicly available favicons/icons)
  const logoUrls: Record<string, string> = {
    'netflix': 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
    'hulu': 'https://www.hulu.com/favicon.ico',
    'disney-plus': 'https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67.png',
    'hbo-max': 'https://www.max.com/favicon.ico',
    'apple-tv': 'https://www.apple.com/v/apple-tv-plus/o/images/meta/apple-tv-plus__eztjr66c14o2_og.png',
    'amazon-prime': 'https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png',
    'paramount-plus': 'https://www.paramountplus.com/favicon.ico',
    'peacock': 'https://www.peacocktv.com/favicon.ico',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg font-bold text-white ${sizeClasses[size]}`}
      style={{ backgroundColor: service.color }}
    >
      {showIcon && logoUrls[serviceId] && (
        <div className="relative" style={{ width: iconSizes[size], height: iconSizes[size] }}>
          <Image
            src={logoUrls[serviceId]}
            alt={service.name}
            width={iconSizes[size]}
            height={iconSizes[size]}
            className="rounded-sm"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <span>{service.shortName}</span>
    </div>
  );
}


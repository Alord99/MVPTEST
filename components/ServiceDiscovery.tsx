import { useAppStore } from '@/lib/store';
import { STREAMING_SERVICES } from '@/lib/types';

export default function ServiceDiscovery() {
  const { activeServices, addService, removeService } = useAppStore();

  const allServices = Object.values(STREAMING_SERVICES);
  const inactiveServices = allServices.filter(s => !activeServices.includes(s.id));

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Discover More Services
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
          {inactiveServices.map(service => (
            <div key={service.id} className="flex-shrink-0 w-[140px] text-center">
              {/* Service Icon */}
              <div
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3 cursor-pointer hover:scale-110 transition-all shadow-2xl border-4 border-white/10"
                style={{ 
                  backgroundColor: service.color,
                  boxShadow: `0 10px 40px ${service.color}40`
                }}
              >
                <span className="text-white text-xl font-bold tracking-tight">
                  {service.shortName}
                </span>
              </div>
              
              {/* Service Name */}
              <p className="text-sm text-gray-300 mb-3 font-medium">
                {service.name}
              </p>
              
              {/* Add Button */}
              <button
                onClick={() => addService(service.id)}
                className="w-10 h-10 mx-auto rounded-full bg-accent-teal flex items-center justify-center text-black font-bold text-xl hover:bg-accent-hover transition"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


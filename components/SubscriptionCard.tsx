import { useAppStore } from '@/lib/store';
import type { Subscription } from '@/lib/types';
import { format } from 'date-fns';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export default function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const { removeSubscription } = useAppStore();

  const monthlyAmount = subscription.billingCycle === 'yearly' 
    ? subscription.amount / 12 
    : subscription.billingCycle === 'weekly'
    ? subscription.amount * 4.33
    : subscription.amount;

  return (
    <div className="bg-bg-secondary rounded-xl p-6 hover:bg-gray-800 transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            {subscription.serviceName}
          </h3>
          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
            subscription.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {subscription.status}
          </span>
        </div>
        
        <button
          onClick={() => removeSubscription(subscription.id)}
          className="text-gray-400 hover:text-red-400 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400 text-sm">Amount</span>
          <span className="text-white font-semibold">
            ${subscription.amount.toFixed(2)} / {subscription.billingCycle}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 text-sm">Monthly Cost</span>
          <span className="text-accent-teal font-semibold">
            ${monthlyAmount.toFixed(2)} /mo
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 text-sm">Next Billing</span>
          <span className="text-white">
            {format(new Date(subscription.nextBillingDate), 'MMM dd, yyyy')}
          </span>
        </div>
      </div>

      {(subscription.managementUrl || subscription.cancellationUrl) && (
        <div className="flex gap-2 pt-4 border-t border-gray-700">
          {subscription.managementUrl && (
            <a
              href={subscription.managementUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent-teal text-black py-2 rounded-lg text-sm font-semibold text-center hover:bg-accent-hover transition"
            >
              Manage
            </a>
          )}
          {subscription.cancellationUrl && (
            <a
              href={subscription.cancellationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-semibold text-center hover:bg-gray-600 transition"
            >
              Cancel
            </a>
          )}
        </div>
      )}
    </div>
  );
}


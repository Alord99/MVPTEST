'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { STREAMING_SERVICES } from '@/lib/types';
import type { Subscription } from '@/lib/types';

interface AddSubscriptionDialogProps {
  onClose: () => void;
}

export default function AddSubscriptionDialog({ onClose }: AddSubscriptionDialogProps) {
  const { addSubscription } = useAppStore();
  const [formData, setFormData] = useState({
    serviceName: '',
    amount: '',
    billingCycle: 'monthly' as 'monthly' | 'yearly' | 'weekly',
    nextBillingDate: '',
    category: 'entertainment',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const service = Object.values(STREAMING_SERVICES).find(s => s.name === formData.serviceName);
    
    const subscription: Subscription = {
      id: Date.now().toString(),
      serviceName: formData.serviceName,
      amount: parseFloat(formData.amount),
      billingCycle: formData.billingCycle,
      nextBillingDate: formData.nextBillingDate,
      category: formData.category,
      status: 'active',
      managementUrl: service ? `https://www.${formData.serviceName.toLowerCase().replace(/\+/g, '').replace(/\s/g, '')}.com/account` : undefined,
      cancellationUrl: service ? `https://www.${formData.serviceName.toLowerCase().replace(/\+/g, '').replace(/\s/g, '')}.com/cancel` : undefined,
    };
    
    addSubscription(subscription);
    onClose();
  };

  const serviceNames = Object.values(STREAMING_SERVICES).map(s => s.name);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-bg-secondary rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Add Subscription</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Name
            </label>
            <select
              value={formData.serviceName}
              onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-accent-teal focus:outline-none"
              required
            >
              <option value="">Select a service...</option>
              {serviceNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amount ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-accent-teal focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Billing Cycle
            </label>
            <select
              value={formData.billingCycle}
              onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value as any })}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-accent-teal focus:outline-none"
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Next Billing Date
            </label>
            <input
              type="date"
              value={formData.nextBillingDate}
              onChange={(e) => setFormData({ ...formData, nextBillingDate: e.target.value })}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-accent-teal focus:outline-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-accent-teal text-black py-2 rounded-lg font-semibold hover:bg-accent-hover transition"
            >
              Add Subscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


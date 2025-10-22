'use client';

import { useState } from 'react';

export default function SubscriptionsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const subscriptions = [
    { name: 'Netflix', logo: 'N', price: '$15.99', cycle: 'month', renewal: 'Jan 15', status: 'Active', color: '#E50914' },
    { name: 'Hulu', logo: 'hulu', price: '$7.99', cycle: 'month', renewal: 'Jan 13', status: 'Active', color: '#1CE783' },
    { name: 'MAX', logo: 'MAX', price: '$15.99', cycle: 'month', renewal: 'Jan 18', status: 'Active', color: '#8B5CF6' },
    { name: 'Disney+', logo: 'Disney+', price: '$7.99', cycle: 'month', renewal: 'Jan 20', status: 'Active', color: '#113CCF' },
    { name: 'Spotify+', logo: 'Spotify+', price: '$9.99', cycle: 'month', renewal: 'Jan 22', status: 'Active', color: '#1DB954' },
    { name: 'Apple TV+', logo: 'Apple TV+', price: '$4.99', cycle: 'month', renewal: 'Jan 25', status: 'Active', color: '#000000' },
  ];

  const monthlySpend = subscriptions.reduce((total, sub) => {
    const price = parseFloat(sub.price.replace('$', ''));
    return total + price;
  }, 0);

  const yearlyTotal = monthlySpend * 12;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Subscriptions</h1>
        <p className="text-gray-400">Track, manage, and optimize your streaming universe.</p>
      </div>

      {/* Add Subscription Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors"
        >
          + Add Subscription
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Monthly Spend */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Monthly Spend</h3>
          <div className="text-3xl font-bold mb-1">${monthlySpend.toFixed(2)}</div>
          <div className="text-sm opacity-90">Tracked: {subscriptions.length}/7 Services</div>
        </div>

        {/* Yearly Total */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Yearly Total</h3>
          <div className="text-3xl font-bold mb-1">${yearlyTotal.toFixed(2)}</div>
        </div>

        {/* Potential Savings */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Potential Savings</h3>
          <div className="text-sm mb-4">Unlock up 15% off!</div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors">
            Explore Discounts
          </button>
        </div>
      </div>

      {/* Billing Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Billing Timeline</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {Array.from({ length: 28 }, (_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-400">MLJ</div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Your Services ({subscriptions.length} Active)</h3>
          <div className="flex gap-4">
            <select className="bg-gray-800 text-white px-3 py-2 rounded">
              <option>Sort by: Renewal Date (Default)</option>
            </select>
            <select className="bg-gray-800 text-white px-3 py-2 rounded">
              <option>Filter by: Active</option>
            </select>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Subscription Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((sub, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg relative">
              {/* Three-dot menu */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              {/* Service Logo/Name */}
              <div className="mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2"
                  style={{ backgroundColor: sub.color }}
                >
                  {sub.logo}
                </div>
                <div className="text-lg font-semibold">{sub.name}</div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold mb-2">{sub.price}/{sub.cycle}</div>

              {/* Renewal Date */}
              <div className="text-gray-400 mb-4">Renews {sub.renewal}</div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">{sub.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center">
        <div className="text-lg mb-2">Unlock 10% off with 8+ services</div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-teal-500 h-2 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>

      {/* Add Subscription Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">Add New Subscription</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Service</label>
                <select className="w-full bg-gray-700 text-white px-3 py-2 rounded">
                  <option>Netflix</option>
                  <option>Hulu</option>
                  <option>Disney+</option>
                  <option>MAX</option>
                  <option>Apple TV+</option>
                  <option>Spotify</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Monthly Cost</label>
                <input 
                  type="text" 
                  placeholder="$15.99"
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Billing Cycle</label>
                <select className="w-full bg-gray-700 text-white px-3 py-2 rounded">
                  <option>Monthly</option>
                  <option>Annual</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded transition-colors"
              >
                Add Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
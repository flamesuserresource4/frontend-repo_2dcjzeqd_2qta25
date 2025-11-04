import React from 'react';

const stats = [
  { label: 'Uptime', value: '99.99%' },
  { label: 'API latency', value: '120ms' },
  { label: 'Cards issued', value: '1.2M+' },
  { label: 'Countries', value: '45+' },
];

export default function Metrics() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-950 dark:to-gray-900/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
              <div className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

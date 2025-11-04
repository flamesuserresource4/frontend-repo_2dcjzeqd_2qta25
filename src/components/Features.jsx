import React from 'react';
import { CreditCard, Shield, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Smart corporate cards',
    desc: 'Create virtual and physical cards in seconds with granular spend limits and merchant controls.',
  },
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'Built with encryption, 2FA, and anomaly detection to keep your business protected.',
  },
  {
    icon: BarChart3,
    title: 'Real-time insights',
    desc: 'Track budgets, monitor burn, and export to your accounting stack with one click.',
  },
  {
    icon: Zap,
    title: 'Instant settlements',
    desc: 'Lightning-fast payouts and reconciliations so your books are always up-to-date.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to move money</h2>
          <p className="mt-3 text-slate-600">A modern toolkit for startups and finance teams to issue cards, control spend, and close the books faster.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-tr from-indigo-50 via-sky-50 to-teal-50 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Ready to modernize your company spend?</h3>
            <p className="mt-3 text-slate-700">Get started in minutes. Spin up your first card, invite your team, and connect your accounting tools.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/>No setup fees</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/>Unlimited virtual cards</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/>Advanced controls</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/>24/7 support</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">
                Create your account <ArrowRight className="h-4 w-4"/>
              </a>
              <span className="text-sm text-slate-600">14-day free trial • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

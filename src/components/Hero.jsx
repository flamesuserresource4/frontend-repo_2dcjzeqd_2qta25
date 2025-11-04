import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Launching the future of digital banking
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Modern payments for ambitious teams
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed">
              Issue virtual and physical cards, automate spend controls, and reconcile in real-time — all in one elegant platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">
                Get started free
              </a>
              <a href="#features" className="inline-flex px-5 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-white transition bg-white/70 backdrop-blur">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div className="text-sm"><span className="font-semibold text-slate-900">No hidden fees</span> · Free trial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

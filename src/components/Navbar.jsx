import React from 'react';
import { Rocket, CreditCard, Shield, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">FluxPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2"><Sparkles className="h-4 w-4"/>Why Flux</a>
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2"><CreditCard className="h-4 w-4"/>Cards</a>
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2"><Shield className="h-4 w-4"/>Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Sign in</a>
          <a href="#cta" className="inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">Get started</a>
        </div>
      </div>
    </header>
  );
}

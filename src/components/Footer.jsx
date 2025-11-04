import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} FluxPay, Inc. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Status</a>
        </nav>
      </div>
    </footer>
  );
}

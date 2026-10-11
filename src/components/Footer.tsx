/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 uppercase tracking-[0.2em] gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="font-bold text-neutral-900 tracking-tight">Redtail Marketing Group LLC</p>
          <p className="text-[10px] tracking-widest text-neutral-400">© {new Date().getFullYear()} redtailmarketing.org</p>
        </div>
        
        <div className="flex items-center space-x-6 text-[10px] font-bold tracking-widest">
          <a href="/privacy-policy-precious-metals" className="hover:text-redtail transition-colors text-neutral-600">
            Privacy Policy (Precious Metals Tracker)
          </a>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">Clutch</a>
        </div>
      </div>
    </footer>
  );
}

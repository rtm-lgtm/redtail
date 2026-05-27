/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 uppercase tracking-[0.2em]">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p>© {new Date().getFullYear()} Redtail Marketing Group</p>
          <p className="text-[10px] tracking-widest text-neutral-300">redtailmarketing.org</p>
        </div>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">Clutch</a>
        </div>
      </div>
    </footer>
  );
}

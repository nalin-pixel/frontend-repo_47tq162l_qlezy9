import { useState } from 'react';
import { Leaf, Gift, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how' },
    { label: 'Rewards', href: '#rewards' },
    { label: 'Find a Bin', href: '#bins' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Trashee</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#rewards" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
              <Gift className="h-4 w-4" />
              Rewards
            </a>
            <a href="#join" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700">
              <User className="h-4 w-4" />
              Join Trashee
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
              <a href="#rewards" className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium">
                <Gift className="h-4 w-4" /> Rewards
              </a>
              <a href="#join" className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white">
                <User className="h-4 w-4" /> Join Trashee
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import { motion } from 'framer-motion';
import { Trophy, Gift, Star, Leaf } from 'lucide-react';

const tiers = [
  {
    name: 'Green',
    points: '0 - 499 pts',
    perks: ['Starter badges', 'Local discounts', 'Monthly challenges'],
    color: 'from-green-500 to-emerald-600',
    icon: Leaf,
  },
  {
    name: 'Silver',
    points: '500 - 1499 pts',
    perks: ['Bonus multipliers', 'Citywide offers', 'Leaderboard access'],
    color: 'from-slate-400 to-slate-600',
    icon: Star,
  },
  {
    name: 'Gold',
    points: '1500+ pts',
    perks: ['Premium rewards', 'Exclusive partners', 'Priority support'],
    color: 'from-yellow-400 to-amber-600',
    icon: Trophy,
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Rewards & Tiers
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Earn points and unlock eco-badges as you keep your city clean.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-10`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid place-items-center shadow">
                  <t.icon className="h-6 w-6 text-slate-900 dark:text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{t.points}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-green-600" /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700"
                >
                  Join & Start Earning
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

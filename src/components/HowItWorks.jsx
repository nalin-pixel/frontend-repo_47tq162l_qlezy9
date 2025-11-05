import { motion } from 'framer-motion';
import { Leaf, QrCode, Gift } from 'lucide-react';

const steps = [
  {
    title: 'Throw trash into a Trashee bin',
    desc: 'Responsible disposal made simple with smart sensors and clean design.',
    icon: Leaf,
  },
  {
    title: 'Scan the QR code on the bin',
    desc: 'Use your phone to scan and authenticate your eco-action in seconds.',
    icon: QrCode,
  },
  {
    title: 'Earn rewards instantly',
    desc: 'Get points, badges and partner offers you can redeem anytime.',
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Three simple steps. Scan. Earn. Repeat.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-green-600 text-white grid place-items-center shadow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

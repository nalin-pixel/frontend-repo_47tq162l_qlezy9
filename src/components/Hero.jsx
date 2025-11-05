import { motion } from 'framer-motion';
import { QrCode, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 text-xs font-semibold">
              <QrCode className="h-3.5 w-3.5" /> Scan. Earn. Repeat.
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Throw Trash. <span className="text-green-600">Earn Rewards.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Your trash is worth something. Use Trashee Smart Bins to keep your city clean and get instant eco-rewards every time you scan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700"
              >
                Scan & Earn Now
              </a>
              <a
                href="#bins"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <MapPin className="mr-2 h-5 w-5" /> Find a Smart Bin
              </a>
            </div>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm">
              Mission: Clean Planet, Smart People. One scan at a time, toward a cleaner Earth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur p-4 md:p-6 shadow-xl">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-green-200 via-cyan-200 to-blue-200 dark:from-green-900 dark:via-cyan-900 dark:to-blue-900 flex items-center justify-center">
                {/* Simple illustrative animation */}
                <motion.div
                  className="grid place-items-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
                >
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl bg-white/90 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-inner grid place-items-center">
                    <QrCode className="h-12 w-12 text-slate-800 dark:text-white" />
                  </div>
                  <p className="mt-4 text-slate-700 dark:text-slate-200 font-medium">Scan QR on the Bin</p>
                </motion.div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600 dark:text-slate-400">
                <div className="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2">Throw</div>
                <div className="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2">Scan</div>
                <div className="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2">Earn</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

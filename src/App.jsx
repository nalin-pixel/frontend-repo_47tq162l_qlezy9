import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Rewards from './components/Rewards';
import { Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Rewards />

        {/* Join / Register Section */}
        <section id="join" className="py-20 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join the Movement</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Sign up as a student, resident, or business and start earning eco-rewards today.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-600" /> Sign up with email or phone</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-600" /> Track points, badges and scans</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-600" /> Compete on leaderboards</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full name</label>
                  <input id="name" type="text" placeholder="Alex Green" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" placeholder="you@earth.com" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="type" className="text-sm font-medium">I am a</label>
                  <select id="type" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500">
                    <option>Student</option>
                    <option>Resident</option>
                    <option>Business</option>
                  </select>
                </div>
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700">Create Account</button>
              </form>
              <p className="mt-3 text-xs text-slate-500">By continuing, you agree to Trashee's Terms & Privacy.</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="bins" className="py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Find a Trashee Bin</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Explore nearby locations and start scanning.</p>
              </div>
              <a href="#join" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
                <MapPin className="h-5 w-5" /> Get Notified Near Me
              </a>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <iframe
                title="Trashee Bins Map"
                className="w-full h-[360px]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.495%2C-0.1057%2C51.515&layer=mapnik"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Partner with us or say hello. We love building cleaner cities.</p>
              <div className="mt-6 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@trashee.eco</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="cname" className="text-sm font-medium">Name</label>
                  <input id="cname" type="text" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="cemail" className="text-sm font-medium">Email</label>
                  <input id="cemail" type="email" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="cmsg" className="text-sm font-medium">Message</label>
                  <textarea id="cmsg" rows="4" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <button type="button" className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Trashee — Your Trash is Worth Something.</p>
          <div className="text-sm text-slate-600 dark:text-slate-400">Made with care for a cleaner planet.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

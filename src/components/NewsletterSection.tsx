import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function NewsletterSection() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="py-24 bg-[#0e1118] border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Private Journal</span>
        <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl text-white mt-3 mb-4">
          Join the TIMELESS Society
        </h2>
        <p className="text-slate-400 text-sm font-light mb-8 max-w-lg mx-auto">
          Receive exclusive access to limited edition releases, private salon invitations, and horological insights.
        </p>

        {subscribed ? (
          <div className="flex items-center justify-center space-x-2 text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 p-4">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm tracking-wide">Thank you for subscribing to TIMELESS Private Journal.</span>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (emailInput) setSubscribed(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              required
              className="bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white flex-1"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-slate-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

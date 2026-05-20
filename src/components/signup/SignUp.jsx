'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function SignUp({ onSignUpSuccess }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [joinedCircle, setJoinedCircle] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    const user = {
      name: name.trim(),
      email: email.trim(),
      joinedCircle,
      streak: 1,
      joinedAt: new Date().toISOString(),
    };

    // যদি প্যারেন্ট থেকে কোনো সাকসেস ফাংশন পাঠানো হয়ে থাকে
    if (onSignUpSuccess) {
      onSignUpSuccess(user);
    } else {
      alert(`Account successfully created for ${user.name}!`);
      router.push('/signin'); // রেজিস্ট্রেশন শেষে সাইন-ইন পেজে নিয়ে যাবে
    }
  };

  const handleQuickDemo = () => {
    setName('Evelyn Thorne');
    setEmail('evelyn@example.com');
    setPassword('botanical2026');
    setJoinedCircle(true);
    setError('');
  };

  return (
    
    <div className="w-full max-w-[440px] space-y-8 animate-fade-in">
      {/* Brand Header */}
      <header className="space-y-2">
            <h1 className="font-serif text-4xl font-bold text-[#05190e] tracking-tight md:text-5xl">
              Plant Villa
            </h1>
            <p className="font-sans text-[18px] font-semibold text-[#424843] leading-normal">
              Create your botanical sanctuary.
            </p>
          </header>

      {/* Quick Demo Access banner */}
      <div className="p-4 bg-[#eceeec] rounded-xl border border-[#c3c8c2]/30 flex justify-between items-center text-xs">
        <span className="text-[#424843] font-medium">Want to test instantly?</span>
        <button
          onClick={handleQuickDemo}
          className="text-[#05190e] font-bold hover:underline bg-[#f8faf8]-bg px-2.5 py-1 rounded-md border border-neutral-300 bg-white"
          type="button"
        >
          Fill Quick Demo
        </button>
      </div>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 font-medium">
            {error}
          </div>
        )}
        
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold font-sans tracking-widest text-[#424843] uppercase" htmlFor="reg-name">
                Full Name
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Evelyn Thorne"
                className="w-full px-4 py-2.5 bg-[#ffffff] border border-[#c3c8c2] focus:border-[#4a654f] focus:ring-1 focus:ring-[#4a654f]/20 rounded-lg transition-all outline-none text-[#191c1b] font-sans"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold font-sans tracking-widest text-[#424843] uppercase" htmlFor="reg-email">
                Email Address
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="evelyn@example.com"
                className="w-full px-4 py-2.5 bg-[#ffffff] border border-[#c3c8c2] focus:border-[#4a654f] focus:ring-1 focus:ring-[#4a654f]/20 rounded-lg transition-all outline-none text-[#191c1b] font-sans"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold font-sans tracking-widest text-[#424843] uppercase" htmlFor="reg-password">
                Password
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-[#ffffff] border border-[#c3c8c2] focus:border-[#4a654f] focus:ring-1 focus:ring-[#4a654f]/20 rounded-lg transition-all outline-none text-[#191c1b] font-sans pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-[#424843] transition-colors flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="reg-newsletter"
            type="checkbox"
            checked={joinedCircle}
            onChange={(e) => setJoinedCircle(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 bg-white cursor-pointer mt-0.5"
          />
          <label className="text-sm text-gray-600 leading-snug cursor-pointer font-sans" htmlFor="reg-newsletter">
            Join the <span className="font-bold text-emerald-700">Plant Villa Circle</span> to receive expert care tips, exclusive drops, and botanical inspiration.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#05190e] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-6 active:scale-[0.99] cursor-pointer"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase font-sans">
          Or register with
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* Social Sign Up */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setName('Stardust Gardener');
                setEmail('stardust@google.com');
                setPassword('googlelogin123');
                setJoinedCircle(true);
                setError('');
              }}
              className="flex items-center justify-center gap-2 py-2.5 border border-[#c3c8c2] rounded-lg hover:bg-[#f2f4f2] transition-all bg-[#ffffff] font-semibold active:scale-[0.98] cursor-pointer"
            >
              <img alt="Google" className="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" />
                
              <span className="text-sm font-semibold text-[#191c1b]">Google</span>
            </button>
            <button
          type="button"
          onClick={() => {
            setName('Celeste Orchard');
            setEmail('celeste@apple.com');
            setPassword('applelogin123');
            setJoinedCircle(true);
            setError('');
          }}
          className="flex items-center justify-center gap-2 py-2.5 border border-[#c3c8c2] rounded-lg hover:bg-[#f2f4f2] transition-all bg-[#ffffff] font-semibold active:scale-[0.98] cursor-pointer"
        >
          <span className="text-sm font-semibold text-[#191c1b]">Apple</span>
        </button>
          </div>


      {/* Sign In Link */}
      <footer className="text-center pt-2">
        <p className="text-sm text-gray-600 font-sans">
          Already have an account?{' '}
          <Link href="/signin" className="text-emerald-700 font-bold hover:underline cursor-pointer">
            Sign In
          </Link>
        </p>
      </footer>
    </div>
  );
}
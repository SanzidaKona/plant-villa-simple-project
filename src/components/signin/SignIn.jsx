'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignIn({ onSignInSuccess, onToggleScreen, onGuestBypass }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    setError('');
    
    
    const name = email.split('@')[0];
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    
    onSignInSuccess({ email, name: capitalizedName || 'Botanist Friend' });
  };

  const handleOAuthClick = (provider) => {
    onSignInSuccess({ 
      email: `welcome.${provider.toLowerCase()}@plantvilla.com`, 
      name: `${provider} User` 
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-stretch w-full bg-white">
      <div className="flex w-full flex-col md:flex-row">
        
        {/* Left Side: Botanical Image (Hero) */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden bg-emerald-950">
          <img 
            alt="Sunlit Monstera" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105 opacity-85" 
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop" 
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white z-10">
            <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-white/95">
              Bringing nature’s elegance to your space.
            </h2>
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#f8faf8]">
          <div className="w-full max-w-md space-y-8">
            
            {/* Form Header */}
            <div className="space-y-2 text-left">
              <h1 className="font-serif text-[32px] font-semibold text-[#05190e] leading-tight">
                Welcome Back
              </h1>
              <p className="text-[#424843] text-base">
                Enter your details to access your botanical sanctuary.
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => handleOAuthClick('Google')}
                className="flex items-center justify-center gap-2 py-2 px-4 border border-[#c3c8c2] rounded-lg hover:bg-[#eceeec] transition-colors font-semibold text-sm text-[#191c1b] cursor-pointer"
              >
                <img alt="Google" className="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" />
                Google
              </button>
              <button 
                type="button"
                onClick={() => handleOAuthClick('Facebook')}
                className="flex items-center justify-center gap-2 py-2 px-4 border border-[#c3c8c2] rounded-lg hover:bg-[#eceeec] transition-colors font-semibold text-sm text-[#191c1b] cursor-pointer"
              >
                <img alt="Facebook" className="w-5 h-5" src="https://www.svgrepo.com/show/475647/facebook-color.svg" />
                Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-[#c3c8c2]"></div>
              <span className="flex-shrink mx-4 text-[#424843] text-xs font-bold tracking-widest uppercase">
                OR
              </span>
              <div className="flex-grow border-t border-[#c3c8c2]"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm border border-red-100">
                  {error}
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-bold tracking-widest uppercase text-[#424843] block" htmlFor="email">
                  Email Address
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#737873]">
                    <Mail size={16} />
                  </div>
                  <input 
                    className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#c3c8c2] focus:border-emerald-600 outline-none text-sm text-[#191c1b]" 
                    id="email" 
                    placeholder="hello@botanical.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1 text-left">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold tracking-widest uppercase text-[#424843] block" htmlFor="password">
                    Password
                  </label>
                  <button 
                    type="button"
                    onClick={() => alert("Garden security code sent to email!")}
                    className="text-emerald-700 text-xs font-bold hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#737873]">
                    <Lock size={16} />
                  </div>
                  <input 
                    className="w-full pl-10 pr-10 py-2 bg-white rounded-lg border border-[#c3c8c2] focus:border-emerald-600 outline-none text-sm text-[#191c1b]" 
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#737873] cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Stay Signed In */}
              <div className="flex items-center gap-2 pt-1 text-left">
                <input 
                  className="w-4 h-4 rounded border-[#c3c8c2] text-emerald-600 focus:ring-emerald-600 cursor-pointer" 
                  id="remember" 
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="text-sm text-[#424843] cursor-pointer" htmlFor="remember">
                  Stay signed in for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full py-3 bg-[#05190e] hover:bg-[#1a2e22] text-white rounded-lg font-semibold text-base transition-colors cursor-pointer" 
                type="submit"
              >
                Sign In
              </button>
            </form>

            {/* Footer Options */}
            <div className="space-y-3">
              <p className="text-center text-sm text-[#424843]">
                Don’t have an account?{' '}
                <button 
                  type="button"
                  onClick={() => onToggleScreen('signup')}
                  className="text-emerald-700 font-bold hover:underline cursor-pointer"
                >
                  Join the Villa
                </button>
              </p>
              
              <div className="flex justify-center">
                <button 
                  type="button"
                  onClick={onGuestBypass}
                  className="text-xs text-[#737873] hover:text-[#191c1b] border-b border-transparent hover:border-[#737873] transition-all cursor-pointer"
                >
                 
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
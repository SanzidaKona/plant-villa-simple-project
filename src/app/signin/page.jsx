'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/signin/Header';
import SignIn from '@/components/signin/SignIn'; 
import { Footer } from '@/components/signin/Footer'


export default function SigninPage() {
  const router = useRouter();

  const handleSignInSuccess = (userData) => {
    alert(`Welcome back, ${userData.name}!`);
    router.push('/'); 
  };

  const handleToggleScreen = (screen) => {
    if (screen === 'signup') {
      alert('Redirecting to Sign Up page...');
    }
  };

  const handleGuestBypass = () => {
    router.push('/');
  };

  return (
    <main>
        <Header />
      <SignIn 
        onSignInSuccess={handleSignInSuccess}
        onToggleScreen={handleToggleScreen}
        onGuestBypass={handleGuestBypass}
      />
      <Footer />
    </main>
    
  );
}
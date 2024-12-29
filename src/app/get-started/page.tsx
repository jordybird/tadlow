'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Removed the Header dynamic import
// const Header = dynamic(() => import('@/app/components/Header'), {
//   ssr: false,
// });

const GetStartedForm = dynamic(() => import('@/app/components/GetStarted/form'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-[#34A56F] text-xl">Loading...</div>
    </div>
  ),
});

export default function GetStartedPage() {
  return (
    <main className="relative">
      {/* Removed the <Header /> component */}
      <GetStartedForm />
    </main>
  );
}

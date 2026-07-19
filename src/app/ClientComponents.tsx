'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic imports with no SSR for client‑only components
const Chatbot = dynamic(() => import('../components/Chatbot'), { ssr: false });
const CartDrawer = dynamic(() => import('../components/CartDrawer'), { ssr: false });
const SearchModal = dynamic(() => import('../components/SearchModal'), { ssr: false });

export default function ClientComponents() {
  return (
    <>
      <CartDrawer />
      <SearchModal />
      <Chatbot />
    </>
  );
}

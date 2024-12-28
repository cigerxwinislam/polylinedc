// Bismillahirrahmanirrahim



import React from 'react';
import MmmPage from '../(main)/page'; // Adjust the import path as necessary
import Navbar from './mmmnv';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
        
        
        
        <Navbar />
        {children}
        <div style={{ display: 'none' }}>
          <MmmPage />
        </div>
      </div>
    </div>
  );
}

export default Layout;
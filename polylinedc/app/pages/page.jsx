// Bismillahirahmanirahim

"use client"

import { Feed } from '@/page-components/Feed';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>



      <Nav/>
    <Feed/>
        <Toaster />
      
    </ThemeProvider>
  );
}

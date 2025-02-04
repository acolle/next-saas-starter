import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope, Inter, Lexend } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { siteInfo } from '@/lib/site-config';

export const metadata: Metadata = siteInfo.metadata
export const viewport: Viewport = { maximumScale: 1 };

// Available fonts
const manrope = Manrope({ subsets: ['latin'] });
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  let userPromise = getUser();
  let teamPromise = userPromise.then(user => {
    if (user) {
      return getTeamForUser(user.id);
    }
    return null;
  });

  return (
    <html
      lang={siteInfo.metadata.lang}
      className={inter.className}
    >
      <body className="min-h-[100dvh] overflow-x-hidden bg-background">
        <UserProvider userPromise={userPromise} teamPromise={teamPromise}>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

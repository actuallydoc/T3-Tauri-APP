'use client'
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children, session }: {
  children: React.ReactNode,
  session: Session | null,
}) {
  return (
    <SessionProvider session={session}>
      {/* You have to wrap ur app inside a html tag and put ur children in the body this is the correct way of doing it */}
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}

import "./globals.css";
// import { useEffect, useState } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import AuthProvider from "@/components/AuthProvider";
export default function RootLayout({children}: {children: any}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <h1>Navbar from layout</h1>

        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}

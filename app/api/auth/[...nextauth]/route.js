//credentials login


// import NextAuth from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = { id: "1", name: "jk", email: "jk.com" }

//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null

//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       }
//     })
//   ]

// })

// export { handler as GET, handler as POST }



//google login


// import User from '@/models/user';
// import { connectToDB } from '../../../../utils/database';


import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

console.log('logged in')
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  // callback: {
  //   async session({ session }) {
      
  //   },
  //   async signIn({ account, profile, user, credentials }) {
  //   }
  // }
})

export { handler as GET, handler as POST }
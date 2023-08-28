"use client";
// import React from 'react'
import Image from "next/image";
import Loading from "./loading";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const page = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading by delaying rendering after 2 seconds
  //   const delayTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(delayTimeout);
  //   };
  // }, []);
  // const { data: session } = useSession();

  const session = useSession();
  console.log("sess from googlepage is ", session);

  // const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     console.log("provider is ", res!);
  //   })();
  // }, []);

  const getUsers=async()=>{
    const response = await fetch("/api/users", {
      method: "GET",
    });
    const data=await response.json()

    console.log("data is ",data)


  
  }


  return (
    <div>
      {/* {isLoading ? <Loading /> : <div>Delayed Page Content</div>} */}

      <button onClick={getUsers}>Get all users</button>

      {session.status == "authenticated" ? (
        <div>
          <Image
            src={session.data.user?.image!}
            width={100}
            height={100}
            alt="profile"
          />

          <p>Hello {session.data.user?.name}</p>

          <button
            onClick={() => {
              signOut();
            }}
          >
            LogOut
          </button>
        </div>
      ) : (
        //credentials login button
        <button
          onClick={() => {
            signIn("google");
          }}
        >
          LOgIN
        </button>

        //google login button

        // <button
        //   onClick={() => {
        //     signIn('credentials', { username:"jahid", password:"123" });
        //   }}
        // >
        //   LOgIN
        // </button>
      )}
    </div>
  );
};

export default page;

"use client";
// import Link from "next/link";
import { SignInButton } from "../components/signInButton";
import { useSession } from "next-auth/react";
import DashboardButton from "@/components/gotodashboardButton";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

function Home() {
  const session=useSession();
  const [authenticated,setAuthenticated]=useState(false);

  useEffect(()=>{
    if(session.status==="authenticated"){
      setAuthenticated(true)
    }else if(session.status==="unauthenticated"){
      setAuthenticated(false);
    }else if(session.status==="loading"){
      <Loader/>
    }
  },[session,authenticated])

  return (
    <div className="flex w-4/5 self-center justify-center flex-col p-4">
      <div className="flex w-full justify-center flex-col pt-16 gap-y-3">
        <h1 className="text-4xl sm:text-6xl text-gray-800 text-center font-semibold">
          The crypto exchange of tommorow,{""}
          <span className="text-green-500">Today!</span>
        </h1>
        <h2 className="text-2xl sm:text-2xl text-gray-600 text-center">
          Create a frictionless wallet with just google account,made for india.
        </h2>
        <div className="w-contain inline pt-2.5 self-center">
          {
          authenticated?<DashboardButton/>:<SignInButton />
          }
        </div>
      </div>
    </div>
  );
}

export default Home;

"use client";
import { useEffect, useState } from "react";
import { SignInButton } from "./signInButton";
import {  Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const session=useSession();
  const router=useRouter();
  const [authenticated,setAuthenticated]=useState(false);
  const [display,setDisplay]=useState(false);

  useEffect(()=>{
    if(session.status==="authenticated"){
      setAuthenticated(true)
    }else if(session.status==="unauthenticated"){
      setAuthenticated(false);
    }else if(session.status==="loading"){
    }
  },[session,authenticated])

  return (
    <div className="flex p-2 md:p-3 text-[#2F4858] justify-between w-full xl:w-5/6 align-middle items-center self-center">
      <div className="text-2xl md:text-4xl">
        DC-<span className="text-green-500">exchange</span>
      </div>
      <div className="text-xl md:text-2xl">
  {authenticated?
  <button className="cursor-pointer p-0.5 bg-transparent hover:bg-gray-300 rounded-md" onClick={()=>{setDisplay(!display)}}>
 <Menu className="sm:size-8"/>
  </button>
  :<SignInButton/>
  }    
  {display?<div className="w-content transition-all  p-2 fixed top-12 right-10 lg:top-14 lg:right-13 xl:right-38 rounded-xl bg-gray-200 text-gray-800 font-semibold">
    <ul className="flex justify-center items-center flex-col w-full h-content gap-y-1">
      <li onClick={()=>{setDisplay(false);router.push("/")}} className="w-full cursor-pointer hover:bg-gray-50 bg-gray-100 duration-100 transition-all border-y-2 border-gray-300">
        Home
      </li>
      <li onClick={()=>{setDisplay(false);signOut();router.push("/")}} className="w-full hover:bg-gray-50 bg-gray-100 duration-100 cursor-pointer transition-all border-y-2 border-gray-300">
        Sign-out
      </li>
    </ul>
  </div>:null}
  </div>
  
    </div>
  );
};

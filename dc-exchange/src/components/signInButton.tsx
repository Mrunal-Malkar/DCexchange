"use client";
import { url } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {  useRouter } from "next/navigation";
export const SignInButton = () => {
  const { status, data } = useSession();
  const router = useRouter();

  const handleAuthentication = () => {
    if (data?.user && status == "authenticated") {
      if (location.href === "/dashboard") {
        router.push("/");
      }
      signOut();
    } else {
      signIn("google");
    }
  };

  return (
    <button
      className="flex text-sm md:text-lg p-1 cursor-pointer rounded-md bg-[#2F4858] active:bg-gray-800"
      onClick={handleAuthentication}
    >
      <div className="bg-white rounded-md text-white flex items-center justify-center font-semibold p-1 px-1.5">
        <Image
          src="/icons/google.png"
          height={24}
          width={24}
          alt="google image"
        />
      </div>
      <div className="text-white font-bold p-1">
        {data?.user ? "Log-out" : "Sign-in"}
      </div>
    </button>
  );
};

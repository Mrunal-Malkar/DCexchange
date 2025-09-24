"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
export const SignInButton = () => {
  const { status, data } = useSession();
  const handleAuthentication = () => {
    if (data?.user && status == "authenticated") {
      signOut();
    } else {
      signIn("google");
    }
  };

  return (
    <button
      className="flex text-lg p-1 rounded-md bg-[#2F4858] active:bg-gray-800"
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

"use client";
import { useSearchParams } from "next/navigation";
// import Link from "next/link";
import { SignInButton } from "../components/signInButton";
import { toastMap } from "@/utils/type";

function Home() {
  const searchParams = useSearchParams();

  if (
    searchParams.get("message") !== null &&
    searchParams.get("toastType") !== null
  ) {
    const message = searchParams.get("message") as string;
    const type = searchParams.get("toastType") as keyof typeof toastMap;
    const fn = toastMap[type];
    if (fn) {
      fn(message);
    }
  }
  return (
    <div className="flex w-4/5 self-center justify-center flex-col p-4">
      <div className="flex w-full justify-center flex-col pt-16 gap-y-3">
        <h1 className="text-6xl text-gray-800 text-center font-semibold">
          The crypto exchange of tommorow,{""}
          <span className="text-green-500">Today!</span>
        </h1>
        <h2 className="text-2xl text-gray-600 text-center">
          Create a frictionless wallet with just google account,made for india.
        </h2>
        <div className="w-contain inline pt-2.5 self-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default Home;

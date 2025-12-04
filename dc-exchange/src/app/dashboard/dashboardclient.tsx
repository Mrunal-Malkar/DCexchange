"use client";
import { Copy, Wallet } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "motion/react";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const Client = ({publicKey}:{publicKey:string}) => {
  const { data } = useSession();
  const [isCopiedWalletAdress,setIsCopiedWalletAdress]=useState<boolean>(false);

  function GetCapitalName(){
  const nameArray = data?.user?.name?.split(" ");
  const name = nameArray?.map((i:string) => {
    const firstLetter = i[0].toUpperCase();
    const restOfName = i.slice(1);
    if (i == nameArray[0]) return firstLetter + restOfName + " ";
    return firstLetter + restOfName;
  });
return name;
}

function handleClipBoard(){
if(isCopiedWalletAdress)return;
  navigator.clipboard.writeText(publicKey)
  setIsCopiedWalletAdress(true);
  setTimeout(()=>{
    setIsCopiedWalletAdress(false);
  },3000);
}

  const picture = data?.user?.image?.replace("s96-c", "s1024-c");

  return (
    <div className="min-h-[90vh] min-w-screen w-screen flex md:p-0 p-4 items-start justify-center">
      <Toaster />
      <motion.div
        initial={{ x: 0, y: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 100,
          transition: { duration: 0.8 },
        }}
        className="h-[600px] w-full md:w-[803px] grid grid-rows-2 md:mt-18 mt-4 rounded-2xl shadow-2xl"
      >
        <div className="px-8 py-4 bg-white grid grid-rows-3 min-h-1/2 min-w-full rounded-t-2xl border-transparent">
          <div className="w-full flex justify-start gap-x-1.5 items-center">
            <div className="w-18 h-18 ">
              {picture ? (
                <Image
                  className="w-full h-full rounded-4xl"
                  src={picture as string}
                  width={18}
                  height={18}
                  alt="profile-picture"
                />
              ) : (
                <div className="flex w-full h-full justify-center items-center flex-row gap-2 self-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce" />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]" />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce [animation-delay:-.5s]" />
                </div>
              )}
            </div>
            <div className="flex text-3xl font-semibold justify-center items-end">
              <h1>Welcome back,<span className="font-semibold"> {GetCapitalName()}</span></h1>
              {/* <p>Let&apos;s exchange!</p> */}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-0">
            <div className="w-full flex h-min text-[18px] gap-x-0.5 items-end">
              <div className="text-gray-400 h-min">
                <Wallet className="size-5" />
              </div>
              <p className="h-min inline font-semibold leading-none text-gray-400">
                Dc-exchange Account Assets:
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-start items-end gap-x-2">
                <h1 className="text-7xl text-gray-800 font-bold">$0.00</h1>
                <h6 className="text-3xl text-gray-600 font-semibold">USD</h6>
              </div>
              <div className="flex items-center">
                <button onClick={handleClipBoard} className="px-2 py-1.5 flex gap-x-1 rounded-2xl items-center hover:bg-gray-300 bg-gray-200 text-black/70 cursor-pointer">
                <Copy size={16} strokeWidth={0.75} />
                {isCopiedWalletAdress?"Copied!":"Your wallet Adress"}</button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-around font-semibold gap-x-1.5 text-lg md:text-xl">
              <button className="text-white cursor-pointer bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Send
              </button>
              <button className="text-white cursor-pointer bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Add funds
              </button>
              <button className="text-white cursor-pointer bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Withdraw
              </button>
              <button className="text-white cursor-pointer bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-gray-50 min-h-1/2 min-w-full rounded-b-2xl border-transparent">
          <div className="w-full flex justify-start items-end"></div>
          <div className="w-full flex flex-col h-max justify-center items-center">
            <div className="w-full h-min flex justify-start items-center">
              <button className="p-0.5 sm:p-1 sm:px-1.5 font-semibold text-2xl">
                Tokens {publicKey}
              </button>
            </div>
            <ul className="h-max w-full flex justifiy-start gap-y-0.5 text-xl items-start flex-col">
              <li className="w-full p-0.5 font-semibold bg-green-200">
                Bitcoin
              </li>
              <li className="w-full p-0.5 font-semibold bg-green-200">
                Bitcoin
              </li>
              <li className="w-full p-0.5 font-semibold bg-green-200">
                Bitcoin
              </li>
              <li className="w-full p-0.5 font-semibold bg-green-200">
                Bitcoin
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Client;

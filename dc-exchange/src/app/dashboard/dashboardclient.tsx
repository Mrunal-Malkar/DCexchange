"use client";
import { Wallet } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "motion/react";
import { Toaster } from "react-hot-toast";

const Client = () => {
  const { data } = useSession();
  const nameArray = data?.user?.name?.split(" ");
  console.log(data?.user?.image);
  const name = nameArray?.map((i) => {
    const firstLetter = i[0].toUpperCase();
    const restOfName = i.slice(1);
    if (i == nameArray[0]) return firstLetter + restOfName + " ";
    return firstLetter + restOfName;
  });
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
          <div className="w-full flex justify-start gap-x-0.5 items-center">
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
            <div className="flex text-2xl font-semibold justify-center items-center">
              <h1>{name}</h1>
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
              <div className="flex w-full justify-start items-end gap-x-2">
                <h1 className="text-7xl text-gray-800 font-bold">$0.00</h1>
                <h6 className="text-3xl text-gray-600 font-semibold">USD</h6>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-around font-semibold gap-x-1.5 text-lg md:text-xl">
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Send
              </button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Add funds
              </button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
                Withdraw
              </button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">
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
                Tokens
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

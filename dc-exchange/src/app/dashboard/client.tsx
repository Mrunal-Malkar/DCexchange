import { Wallet } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Client = ({ welcome }: { welcome?: boolean }) => {
  if (welcome === true) {
    toast.success("Welcome to DC Exchange, you are now signed-in!");
  }

  return (
    <div className="min-h-[90vh] min-w-screen w-screen flex md:p-0 p-4 items-start justify-center">
      <Toaster />
      <div className="h-[600px] w-full md:w-[803px] grid grid-rows-2 md:mt-18 mt-4 rounded-2xl shadow-2xl">
        <div className="px-8 py-4 bg-white grid grid-rows-3 min-h-1/2 min-w-full rounded-t-2xl border-transparent">
          <div className="w-full flex justify-start items-center">
            <div className="w-18 h-18 bg-black">Profile image</div>
            <div className="flex text-2xl font-semibold justify-center items-center">
              <h1>Your Name</h1>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-0">
            <div className="w-full flex h-min text-[18px] gap-x-0.5 items-end">
              <div className="text-gray-400 h-min">
                <Wallet className="size-5"/>
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
            <div className="w-full flex justify-around font-semibold gap-x-1.5 text-xl">
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">Send</button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">Add funds</button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">Withdraw</button>
              <button className="text-white bg-gray-700 px-4 md:px-7 py-2 w-1/4 rounded-lg">Swap</button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-400 min-h-1/2 min-w-full rounded-b-2xl border-transparent">
          as
        </div>
      </div>
    </div>
  );
};

export default Client;

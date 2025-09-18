import { SignInButton } from "./button";

export const Navbar = () => {
  return (
    <div className="flex p-3 text-[#2F4858] justify-between w-5/6 align-middle items-center self-center">
      <div className="text-4xl">
        DC-<span className="text-green-500">exchange</span>
      </div>
      <div className="text-2xl">
        <SignInButton/>
      </div>
    </div>
  );
};

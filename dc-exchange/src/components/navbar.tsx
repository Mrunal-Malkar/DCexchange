import { SignInButton } from "./signInButton";

export const Navbar = () => {
  return (
    <div className="flex p-2 md:p-3 text-[#2F4858] justify-between w-full xl:w-5/6 align-middle items-center self-center">
      <div className="text-2xl md:text-4xl">
        DC-<span className="text-green-500">exchange</span>
      </div>
      <div className="text-xl md:text-2xl">
        <SignInButton/>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="flex p-4 text-gray-500 justify-between min-w-full">
      <div className="text-2xl">
        DC-<span className="text-green-500">exchange</span>
      </div>
      <div className="text-xl">
        <button className="p-2 flex">
          <div className="bg-gray-600 p-1 border-r-2 border-amber-600">
            Log-in
          </div>
          <div className="bg-blue-500 p-1">Google</div>
        </button>
      </div>
    </div>
  );
};

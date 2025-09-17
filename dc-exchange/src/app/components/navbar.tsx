export const Navbar=()=>{
    return(
    <div className="flex p-4 text-gray-500 justify-between min-w-full">
        <div className="text-2xl">DC-<span className="text-green-500">exchange</span></div>
        <div className="text-xl">
            <button className="p-2 flex justifiy-auto ">
                <div className=" bg-gray-600 p-1 border-e-2 border-amber-600">Log-in</div>  {/* fix: border not visible*/}
                <div className=" bg-blue-500 p-1">Google</div>
            </button>
        </div>
    </div>)
}
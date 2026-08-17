const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex justify-around items-center w-full p-3 top-0 sticky h-14">
        <div className="logo font-bold text-3xl hover:cursor-pointer"><span className="text-white">&lt;</span><span className="text-green-700">Pass</span><span className="text-indigo-700">Man/</span><span className="text-white">&gt;</span></div>
        {/* <ul>
            <li className="flex gap-5 text-[18px] text-white">
                <a href="/" className="hover:underline hover:font-bold transform ">Home</a>
                <a href="/" className="hover:underline hover:font-bold transform ">About</a>
                <a href="/" className="hover:underline hover:font-bold transform ">Contact</a>
            </li>
        </ul> */}
        <button className="text-white bg-green-800 rounded-4xl hover:cursor-pointer hover:bg-green-700 flex justify-center items-center w-fit px-3 py-1 gap-2 font-bold text-lg ring-1 ring-white">
          <img src="src/assets/Octicons-mark-github.svg" alt="" className="w-9 invert"  />
          Github
        </button>
    </nav>
  )
}

export default Navbar

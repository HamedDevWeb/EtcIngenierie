import Link from "next/link.js"
import Links from "./links/Links.jsx"

const Navbar = () => {
  return (
    <div className="bg-blue-800 w-full px-4  md:bg-yellow-500 lg:bg-red-800 xl:bg-green-500 h-20 sm:h-24 flex items-center  justify-between">
        <Link href="/" className="text-white   bg-secColor font-bold text-xs sm:text-md sm:px-5 md:text-lg px-4  py-3 sm:py-5 rounded-full">ETCE | INGENIEURIE</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar
import Link from "next/link.js"
import Links from "./links/Links.jsx"

const Navbar = () => {
  return (
    <div className="bg-blue-800 w-full px-4 sm:px-6 md:px-10 h-20 sm:h-24 flex items-center justify-between">
        <Link href="/" className="text-white bg-secColor font-bold text-sm sm:text-md md:text-lg px-4 sm:px-5 py-3 sm:py-5 rounded-full">ETC | INGENIEURIE</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar
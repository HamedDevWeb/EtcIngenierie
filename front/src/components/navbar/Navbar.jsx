import Link from "next/link.js"
import Links from "./links/Links.jsx"

const Navbar = () => {
  return (
    <div className="bg-blue-800 w-full px-10 h-24 flex items-center justify-between">
        <Link href="/" className="text-white bg-secColor font-bold text-lg px-5 py-5 rounded-full">ETC | INGENIEURIE</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import NavMenu from "./NavMenu";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex items-center gap-4 md:h-16 h-14 text-primary px-4 py-1.5 lg:px-14">
        <div className="xl:hidden">
            <NavMenu/>
        </div>
        <Link href="/">
            <h1 className="cursor-pointer font-extrabold text-2xl">M</h1>
        </Link>
        <div className="xl:flex hidden gap-4 px-8 font-bold">
            <p className="cursor-pointer hover:opacity-70 duration-200">Trending</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">Popular</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">New</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">All</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">Blogs</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">Templates</p>
            <p className="cursor-pointer hover:opacity-70 duration-200">Support</p>

        </div>
        <div className={`bg-input w-full h-10 flex items-center p-4 cursor-text rounded-lg`}>
            <FaMagnifyingGlass className="mr-4 text-sm"/>
            <p>Search</p>
        </div>
        <div className="flex items-center gap-8">
            <FaUser className="text-xl cursor-pointer xs:hidden"/>
            <div className="xs:flex hidden ">
                <p className="w-16 font-bold cursor-pointer">Log In</p>
                <p className="w-16 font-bold cursor-pointer">Sign Up</p>
            </div>
            <div className="hidden lg:flex gap-4">
                <button className="h-11 w-28  bg-primary hover:bg-opacity-90 duration-300 text-white px-2 rounded-lg">Subscribe</button>
                <button className="h-11 w-36 border border-primary rounded-lg hover:bg-primary hover:text-white duration-300">Create Store</button>
            </div>
        </div>
    </div>
  )
}
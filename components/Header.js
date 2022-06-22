import React from "react"
import Image from "next/image"
import {
  BellIcon,
  ChatIcon,
  ChevronDoubleDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid"
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"

function Header() {
  return (
    <nav className=" sticky top-0 z-50 bg-white lg:flex items-center justify-between p-2 lg:px-4 shadow-md">
      {/* left part  */}
      <div className="flex flex-row items-center">
        <div className="object-contain inline-flex md:hidden">
          <Image
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
            alt="facebook"
            width={150}
            height={100}
          />
        </div>
        <div className="hidden md:inline-flex items-center">
          <Image
            src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
            alt="facebook"
            width={54}
            height={54}
          />
        </div>
        <div className="flex items-center h-7  rounded-full bg-gray-100">
          <SearchIcon className="h-4 mr-2 pl-2 text-gray-600" />
          <input
            type="text"
            className="hidden md:inline-flex h-9  ml-2 pr-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink "
            placeholder="Search facebook"
          />
        </div>
      </div>
      {/* center part  */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-1">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* rigth part  */}
      <div>
        {/* <Image/> */}
        <p className="hidden lg:inline-flex font-semibold whitespace-nowrap pr-3">
          Sreehari Prathap
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDoubleDownIcon className="icon" />
      </div>
    </nav>
  )
}

export default Header

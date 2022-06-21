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

function Header() {
  return (
    <div>
      {/* left part  */}
      <div className="flex items-center">
        <Image
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook"
          width={300}
          height={150}
          layout="fixed"
          className="object-contain"
        />
        <div className="flex items-center ml-2 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className=" h-10 border-none"
            placeholder="search facebook"
          />
        </div>
      </div>
      {/* center part  */}
      {/* rigth part  */}
    </div>
  )
}

export default Header

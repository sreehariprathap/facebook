function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="cursor-pointer flex place-items-center rounded-xl md:px-5 sm:h-14 px-5 md:hover:bg-gray-100 md:active:border-b-2 active:border-blue-500 
    group "
    >
      <Icon
        className={`h-4 text-gray-500 text-center group-hover:text-blue-500 sm:h-7 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  )
}

export default HeaderIcon

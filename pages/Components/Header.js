import { ArrowRightIcon, DotsVerticalIcon, MenuIcon, QuestionMarkCircleIcon, SearchCircleIcon, SearchIcon } from "@heroicons/react/solid";

function Header() {
   return (
      // Header
      <header className="sticky px-4 py-3 shadow-lg md:px-10 md:py-4 lg:py-6">

         <div className="flex justify-between">
            {/* Menu Icon */}
            <div className="md:hidden flex items-center">
               <MenuIcon className="h-6 text-gray-700" />
            </div>

            {/* Logo */}
            <div className=" flex items-center text-gray-700 text-base cursor-pointer font-semibold md:text-lg lg:text-xl">
               Online E-Commerce
            </div>

            {/* Search Bar */}
            <div className="hidden md:inline-flex flex flex-grow justify-center ">
               <input
                  placeholder="Search..."
                  className="border outline-none cursor-pointer text-gray-700 rounded-full px-3 py-1 shadow-md"

               />

            </div>

            {/* Subscription */}
            <div className="flex sm:space-x-1 md:space-x-3 lg:space-x-4">
               <div className="hidden md:block md:flex md:items-center md:justify-center ">
                  <div className=" active:scale-75 transition duration-200 ease-in-out ">
                     <div className="flex items-center justify-center font-semibold cursor-pointer border rounded-lg border-gray-500 p-1 text-gray-500 ">
                        Sign in
                        <div>
                           <ArrowRightIcon className="h-4 text-gray-500 ml-2 " />
                        </div>
                     </div>
                  </div>
                  <div className="hidden md:block text-gray-800 cursor-pointer font-semibold ml-3 hover:text-gray-500">
                     Log in
                  </div>
               </div>

               {/* QuestionMarkCircleIcon */}
               <div className="hidden md:inline-flex flex items-center">
                  <QuestionMarkCircleIcon className="h-6 text-gray-700 cursor-pointer hover:text-gray-500" />
               </div>

               {/* DotsVertical Icon */}
               <div className="flex items-center">
                  <DotsVerticalIcon className="hidden md:inline-flex h-5 text-gray-700 cursor-pointer hover:text-gray-500" />
               </div>

               {/* Search Icon */}
               <div className="md:hidden ">
                  <SearchCircleIcon className="h-6 text-gray-700 cursor-pointer" />
               </div>

            </div>

         </div>

      </header >
   )
}

export default Header

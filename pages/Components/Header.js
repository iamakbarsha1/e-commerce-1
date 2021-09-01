import { ArrowRightIcon, DotsVerticalIcon, MenuIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

function Header() {
   return (
      <header className="px-5 py-3 shadow-lg md:px-10 md:py-6">

         <div className="flex justify-between">
            {/* Menu Icon */}
            <div className="flex items-center">
               <MenuIcon className="h-6 text-gray-700" />
            </div>

            {/* Logo */}
            <div className="flex items-center text-gray-700 text-base font-semibold md:text-xl">
               Online E-Commerce
            </div>

            {/* Subscription */}
            <div className="flex sm:space-x-1 md:space-x-3 lg:space-x-4">
               <div className="hidden md:block md:flex md:items-center md:justify-center">
                  <div className="flex items-center justify-center font-semibold border rounded-lg border-gray-500 p-1 text-gray-500">
                     Sign in
                     <ArrowRightIcon className="h-4 text-gray-500 ml-2" />
                  </div>
                  <div className="hidden md:block text-gray-800 font-semibold ml-3">
                     Log in
                  </div>
               </div>

               {/* QuestionMarkCircleIcon */}
               <div className="hidden md:inline-flex flex items-center">
                  <QuestionMarkCircleIcon className="h-6 text-gray-700 " />
               </div>

               {/* DotsVertical Icon */}
               <div className="flex items-center">
                  <DotsVerticalIcon className="h-5 text-gray-700" />
               </div>

            </div>

         </div>

      </header >
   )
}

export default Header

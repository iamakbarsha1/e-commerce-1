import { ChevronDownIcon, CogIcon, CurrencyRupeeIcon, InformationCircleIcon, MoonIcon, QuestionMarkCircleIcon, ServerIcon, ShoppingCartIcon, SunIcon, UserIcon, ViewGridIcon } from "@heroicons/react/solid"

function SideBar() {
   return (
      <nav className="relative z-0 h-screen w-72 md:w-48 bg-gray-700  ">
         <div className="p-3 bg-gray-600 ">

            <div className="flex justify-between mb-5">
               {/* UserImage */}
               <div className="flex items-center justify-center w-12 h-12 p-5 bg-blue-400 text-gray-100 text-lg rounded-full">
                  <p>AS</p>
               </div>

               {/* Dark Mode Icon*/}
               <div className="pt-2 pl-2 ">
                  <MoonIcon className="h-5 text-gray-100 cursor-pointer focus:outline-none" />
                  <SunIcon className="hidden h-5 text-gray-100 cursor-pointer focus:outline-none" />
               </div>
            </div>

            <div className="flex justify-between mb-2">
               <div>
                  {/* UserName */}
                  <div className="text-gray-100 text-base">
                     Akbar Sha
                  </div>

                  {/* PhoneNumber */}
                  <div className="text-gray-300 text-xs">
                     +91 9941786918
                  </div>
               </div>

               {/* DownChevronIcon */}
               <div className="flex items-center justify-center pl-2">
                  <ChevronDownIcon className="h-6 text-gray-100" />
               </div>
            </div>

         </div>

         <div className="">
            <div className="border-b  pt-3 ">
               <a className="flex items-center px-3 pb-3 cursor-pointer transition duration-500 ease-in-out transform  hover:opacity-60" onClick="">
                  <ViewGridIcon className="h-5 mr-5 text-gray-100 " />
                  <p className="lg:hidden text-gray-100 flex-grow">Shop by Category</p>
                  <p className="hidden lg:inline-block text-gray-100 flex-grow">Categories</p>
                  <ChevronDownIcon className="h-6 text-gray-100" />
               </a>
               <div className="hidden text-sm bg-gray-600  text-gray-100   pl-16 pt-2 pb-2">

                  <ul className="space-y-1">
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Vegetables</a></li>
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Fruits</a></li>
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Rice</a></li>
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Grains</a></li>
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Dry Fruits</a></li>
                     <li className=" transition duration-400 ease-in-out transform hover:text-gray-900"><a href="#">Health</a></li>
                  </ul>

               </div>
            </div>


         </div>

         <div className="p-3 pt-3 space-y-2">
            <div className="flex items-center ">
               <UserIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100 ">Account</p>
            </div>
            <div className="flex items-center ">
               <ShoppingCartIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">Cart</p>
            </div>
            <div className="flex items-center ">
               <CogIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">Settings</p>
            </div>
            <div className="flex items-center ">
               <CurrencyRupeeIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">Payments</p>
            </div>
            <div className="flex items-center ">
               <InformationCircleIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">About</p>
            </div>
            <div className="flex items-center ">
               <QuestionMarkCircleIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">Help</p>
            </div>
         </div>
      </nav>
   )
}

export default SideBar

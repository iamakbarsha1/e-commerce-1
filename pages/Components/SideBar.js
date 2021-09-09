import { ChevronDownIcon, CogIcon, CurrencyRupeeIcon, InformationCircleIcon, MoonIcon, QuestionMarkCircleIcon, ServerIcon, ShoppingCartIcon, SunIcon, UserIcon, ViewGridIcon } from "@heroicons/react/solid"
import { useState } from "react"

function SideBar() {


   return (
      <nav
         id="#sidebar"
         className="relative z-0 h-screen w-72 md:w-48 bg-gray-700"

      >
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
            <div className="border-b p-3 ">
               <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
                  <div className="flex items-center rounded-lg py-2 px-2">
                     <ViewGridIcon className="h-5 mr-5 text-gray-100  group-hover:text-red-900" />
                     <p className="lg:hidden text-gray-100 font-normal flex-grow group-hover:text-red-900">Shop by Category</p>
                     <p className="hidden lg:block text-gray-100 font-normal flex-grow group-hover:text-red-900">Categories</p>
                     <ChevronDownIcon className="h-6 text-gray-100 group-hover:text-red-900" />
                  </div>
               </a>
               {/* <a className="flex items-center py-2  cursor-pointer transition duration-300 ease-in-out transform  hover:opacity-60" onClick="">
                  <ViewGridIcon className="h-5 mr-5 text-gray-100 " />
                  <p className="lg:hidden text-gray-100 flex-grow">Shop by Category</p>
                  <p className="hidden lg:inline-block text-gray-100 flex-grow">Categories</p>
                  <ChevronDownIcon className="h-6 text-gray-100" />
               </a> */}
               <div className="hidden text-sm bg-gray-700  text-gray-100   pl-16 pt-2 pb-2">

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

         <div className="p-3 ">
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <UserIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 font-normal group-hover:text-red-900">Account</p>
               </div>
            </a>
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <ShoppingCartIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 group-hover:text-red-900">Cart</p>
               </div>
            </a>
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <CogIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 group-hover:text-red-900">Settings</p>
               </div>
            </a>
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <CurrencyRupeeIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 group-hover:text-red-900">Payments</p>
               </div>
            </a>
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <InformationCircleIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 group-hover:text-red-900">About</p>
               </div>
            </a>
            <a className="hover:bg-yellow-100 hover:shadow-xl group block rounded-lg cursor-pointer">
               <div className="flex items-center rounded-lg py-2 px-2">
                  <QuestionMarkCircleIcon className="h-5 text-gray-100 mr-5 group-hover:text-red-900" />
                  <p className="text-gray-100 group-hover:text-red-900">Help</p>
               </div>
            </a>

         </div>
      </nav>
   );
}


export default SideBar

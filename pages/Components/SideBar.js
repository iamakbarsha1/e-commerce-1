import { ChevronDownIcon, CogIcon, InformationCircleIcon, MoonIcon, QuestionMarkCircleIcon, ServerIcon, ShoppingCartIcon, SunIcon, UserIcon, ViewGridIcon } from "@heroicons/react/solid"

function SideBar() {
   return (
      <div className="h-screen w-64 md:w-48 bg-gray-700">
         <div className="p-3 bg-gray-600 ">

            <div className="flex justify-between mb-5">
               {/* UserImage */}
               <div className="flex items-center justify-center w-12 h-12 p-5 bg-blue-400 text-gray-100 text-lg rounded-full">
                  <p>AS</p>
               </div>

               {/* Dark Mode Icon*/}
               <div className="pt-2 pl-2 ">
                  <MoonIcon className="h-5 text-gray-100" />
                  <SunIcon className="hidden h-5 text-gray-100" />
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

         <div>
            <div className="flex items-center justify-between border-b px-3 pt-3 pb-2">
               <ViewGridIcon className="h-5 text-gray-100 " />
               <p className="text-gray-100">Categories</p>
               <ChevronDownIcon className="h-6 text-gray-100" />
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
               <InformationCircleIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">About</p>
            </div>
            <div className="flex items-center ">
               <QuestionMarkCircleIcon className="h-5 text-gray-100 mr-5" />
               <p className="text-gray-100">Help</p>
            </div>
         </div>
      </div>
   )
}

export default SideBar

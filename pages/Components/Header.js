import { ArrowRightIcon, DotsVerticalIcon, MenuIcon, QuestionMarkCircleIcon, SearchCircleIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Header() {

   const router = useRouter();

   const cart = () => {
      router.push({
         pathname: "/cart"
      });
   };

   // function menuIcon() {
   //    const menuIcon = document.getElementById("#sidebar");
   //    if (menuIcon.style.display === "block") {
   //       menuIcon.style.display = "none";
   //    }
   //    else {
   //       menuIcon.style.display = "block";
   //    }
   // }

   return (
      // Header
      <header className="sticky px-4 py-3 shadow-lg md:px-10 md:py-4 lg:py-4">

         <div className="flex justify-between">
            {/* Menu Icon */}
            <div
               // id="#menuIcon"
               className="md:hidden flex items-center cursor-pointer" onClick="menuIcon()">
               <MenuIcon className="h-5 md:h-6 text-gray-700" />
            </div>

            {/* Logo */}
            <div
               onClick={() => router.push("/")}
               className=" flex items-center justify-center text-gray-700 text-base cursor-pointer font-semibold md:text-sm lg:text-xl">
               Online eCommerce
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
                     <div className="flex items-center justify-center font-semibold text-sm cursor-pointer border rounded-lg border-gray-500 p-1 text-gray-500 ">
                        Sign in
                        <div>
                           <ArrowRightIcon className="h-4 text-gray-500 ml-2 " />
                        </div>
                     </div>
                  </div>
                  <div className="hidden md:block text-gray-800 cursor-pointer font-semibold text-sm ml-3 hover:text-gray-500">
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
               <div className="md:hidden flex items-center">
                  <SearchIcon className="h-5 md:h-6 mr-1 text-gray-700 cursor-pointer" />
               </div>

               {/* Cart Icon */}
               <div className=" flex items-center cursor-pointer" onClick={cart}>
                  <ShoppingCartIcon className="h-5 md:h-6 flex items-center justify-center text-gray-700 " />
               </div>

            </div>

         </div>

      </header >
   )
}

export default Header

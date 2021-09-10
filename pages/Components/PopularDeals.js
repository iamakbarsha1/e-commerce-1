import { ShoppingCartIcon } from "@heroicons/react/solid"

function PopularDeals({ img, name, price }) {


   return (

      <div className="">

         {/* <div className="px-4 text-2xl">
            Popular Deals
         </div> */}

         <div className="mx-4 flex space-x-2 lg:space-x-4 mb-2">

            <div className="bg-gray-200 rounded-xl space-x-2 cursor-pointer hover:shadow-lg">
               {/* Img */}
               <div className="">
                  <img src={img}
                     className="h-40 w-46 rounded-t-xl"
                  >
                  </img>
               </div>

               <div className="flex ">
                  <div className="space-y-2 mb-2 flex-grow">
                     {/* Name-Product */}
                     <div>
                        <p className="mt-2 text-lg">
                           {name}
                        </p>
                     </div>

                     {/* DropDown List */}
                     <div>
                        <label htmlFor="quantity" className="text-gray-700"></label>
                        <select id="quantity" name="quantity" className="outline-none text-gray-500 text-sm">
                           <option value="500 g">500 g</option>
                           <option value="1 kg">1 kg</option>
                           <option value="2 kg">2 kg</option>
                           <option value="3 kg">3 kg</option>
                        </select>
                     </div>

                     {/* Price */}
                     <div className="flex">
                        <p className="text-xs mr-1 mt-1">{price}</p>
                        {/* <p className=" text-xl flex items-end">70</p>
                        <p className="ml-1 flex items-end text-gray-500">/kg</p> */}
                     </div>
                  </div>

                  {/* Cart Icon */}
                  <div className="flex items-center mr-6">
                     <div className="bg-red-900 rounded-full p-2">
                        <ShoppingCartIcon className="h-6 text-gray-100" />
                     </div>
                  </div>
               </div>

            </div>


         </div>

      </div >

   )
}

export default PopularDeals
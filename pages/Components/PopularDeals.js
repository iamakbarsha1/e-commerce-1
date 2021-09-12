import { ShoppingCartIcon } from "@heroicons/react/solid"

function PopularDeals({ img, name, price }) {


   return (

      <div className=" bg-gray-200 rounded-xl space-x-2 lg:space-x-4 cursor-pointer hover:shadow-lg">
         {/* Img className=" bg-gray-200 rounded-xl space-x-2 lg:space-x-4 cursor-pointer hover:shadow-lg" */}

         <div className="flex-col">
            <div className="">
               <img src={img}
                  className="h-40 w-46 rounded-t-xl"
               >
               </img>
            </div>

            <div className=" mb-2 flex flex-grow-0">
               <div className="ml-2 space-y-2 ">
                  {/* Name-Product */}
                  <div>
                     <p className="mt-2 text-sm">
                        {name}
                     </p>
                  </div>

                  {/* DropDown List */}
                  <div>
                     <label htmlFor="quantity" className="text-gray-700"></label>
                     <select id="quantity" name="quantity" className="outline-none text-gray-500 text-xs">
                        <option value="500 g">500 g</option>
                        <option value="1 kg">1 kg</option>
                        <option value="2 kg">2 kg</option>
                        <option value="3 kg">3 kg</option>
                     </select>
                  </div>

                  {/* Price */}
                  <div className="">
                     <p className="text-sm mb-2">{price}</p>
                     {/* <p className=" text-xl flex items-end">70</p>
                        <p className="ml-1 flex items-end text-gray-500">/kg</p> */}
                  </div>

               </div>
               {/* Cart Icon */}
               <div className="flex items-center justify-center mx-5">
                  <div className="bg-red-900 rounded-full p-2">
                     <ShoppingCartIcon className="h-6 text-gray-100" />
                  </div>
               </div>
            </div>

         </div>

      </div>




   )
}

export default PopularDeals

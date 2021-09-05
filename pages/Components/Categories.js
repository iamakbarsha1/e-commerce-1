function Categories() {
   return (
      <div>

         {/* Categories */}
         <div className="md:flex grid grid-cols-3 px-4 pt-4 pb-3 gap-2">
            <span className="bg-gray-300 px-2 py-2 rounded-lg font-medium text-sm cursor-pointer flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-blue-400 hover:shadow-xl transition active:scale-75 ease-in-out duration-300">Vegetables</span>

            <p className="bg-gray-300 px-2 py-2 rounded-lg font-medium text-sm cursor-pointer flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-gray-500 transition active:scale-75 ease-in-out duration-300">Fruits</p>

            <p className="bg-gray-300 px-2 py-2 rounded-lg font-medium cursor-pointer text-sm flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-gray-500 transition active:scale-75 ease-in-out duration-300">Rice</p>

            <p className="bg-gray-300 px-2 py-2 rounded-lg font-medium cursor-pointer text-sm flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-gray-500 transition active:scale-75 ease-in-out duration-300">Grains</p>

            <p className="bg-gray-300 px-2 py-2 rounded-lg font-medium cursor-pointer text-sm flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-gray-500 transition active:scale-75 ease-in-out duration-300">Dry Fruits</p>

            <p className="bg-gray-300 px-2 py-2 rounded-lg font-medium cursor-pointer text-sm flex items-center justify-center md:w-28 border hover:border hover:text-white hover:bg-gray-500 transition active:scale-75 ease-in-out duration-300">Health</p>
         </div>
      </div>
   )
}

export default Categories

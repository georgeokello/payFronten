

const NavBar = () =>{
    return(
        <div className="top-0 left-20 w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 shadow-md z-10">
          <input
            type="text"
            placeholder="Search..."
            className="ml-15 w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />    
        </div>
    )
}

export default NavBar
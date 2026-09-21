const Navbar = () => {
  return (

    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white py-3 shadow-sm sm:py-4">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between">
        
      
        <div className="md:hidden flex items-center">
          <img 
            src="/hamburger.png" 
            alt="Menu Icon" 
            className="w-6 h-6 object-contain"
          />
        </div>

   
        <div className="flex items-center justify-center">
          <img 
            src="/images/logo-text.png" 
            alt="DevStack Logo" 
            className="h-7 w-auto object-contain sm:h-8 md:h-9" 
          />
        </div>

        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="text-pink-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-pink-600">Technologies</a>
          <a href="#" className="text-gray-600 hover:text-pink-600">Projects</a>
          <a href="#" className="text-gray-600 hover:text-pink-600">About</a>
          <a href="#" className="text-gray-600 hover:text-pink-600">Contact</a>
        </div>

     
        <div className="flex items-center space-x-2 text-xs font-medium sm:space-x-3 md:space-x-5 md:text-sm">
          <button className="hidden text-gray-700 hover:text-pink-600 sm:block">Sign In</button>
          <button className="rounded-full bg-pink-600 px-3 py-1.5 font-semibold text-white hover:bg-pink-700 sm:px-4 md:px-5 md:py-2">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
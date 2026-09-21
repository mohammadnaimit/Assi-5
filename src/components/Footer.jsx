const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 md:pt-16 pb-8 md:pb-10">
      <div className="w-11/12 max-w-7xl mx-auto">
        
      
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 md:pb-12 text-center md:text-left">
          
         
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="/images/logo-text.png" 
                alt="DevStack Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mx-auto md:mx-0">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

           
            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 pt-1 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
              <span className="text-gray-400">·</span>
              <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
              <span className="text-gray-400">·</span>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:block space-y-3">
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase">
              PRODUCT
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

       
          <div className="hidden md:block space-y-3">
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

         
          <div className="hidden md:block space-y-3">
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase">
              LEGAL
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

     
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-center text-xs text-gray-400 sm:flex-row sm:text-left md:pt-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-3 md:space-x-6">
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
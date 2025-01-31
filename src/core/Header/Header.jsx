import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const collapseMenu = document.getElementById('collapseMenu');
    const links = collapseMenu.getElementsByTagName('a');

    const handleLinkClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href.startsWith('#')) {
        event.preventDefault();
        const elementId = href.slice(1);
        document.getElementById(elementId).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    for (let link of links) {
      link.addEventListener('click', handleLinkClick);
    }
    return () => {
      for (let link of links) {
        link.removeEventListener('click', handleLinkClick);
      }
    };
  }, []);

  return (
    <header className='sticky top-0 z-20 shadow-md py-4 px-4 sm:px-10 bg-[#004CA1] min-h-[70px]'>
      <div className='relative flex flex-wrap items-center justify-between gap-5'>
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">
            <img src="/images/Metro_Logo.jpg" alt="" className="h-16 w-36" />
          </h1>
        </Link>
        <div className='flex gap-4 lg:order-1 max-sm:ml-auto'>
          <a href="#buyinsurance" className="hidden sm:block">
            <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
              Buy Insurance
            </button>
          </a>
          <Link to="/agentregistration" className="hidden sm:block">
            <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
              Agent Registration
            </button>
          </Link>
          <Link to="/login" className="hidden sm:block">
            <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
              Login
            </button>
          </Link>
          <button id="toggle" className='lg:hidden ml-7' onClick={handleToggle}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <ul id="collapseMenu" className={`lg:flex lg:space-x-5 ${menuOpen ? 'block' : 'hidden'} max-lg:space-y-2 max-lg:py-4 max-lg:w-full`}>
          <li className='max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded'>
            <Link to="/" className='lg:hover:text-[#007bff] text-white max-lg:text-white block font-semibold text-lg'>Home</Link>
          </li>
          <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
            <a href="#aboutus" className='lg:hover:text-[#007bff] text-white block font-semibold text-lg'>About Us</a>
          </li>
          <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
            <a href="#services" className='lg:hover:text-[#007bff] text-white block font-semibold text-lg'>Services</a>
          </li>
          {/* <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
            <Link to="" className='lg:hover:text-[#007bff] text-white block font-semibold text-lg'>Insurance</Link>
          </li> */}
          <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
            <Link to="/blogs" onClick={scrollToTop} className='lg:hover:text-[#007bff] text-white block font-semibold text-lg'>Blogs</Link>
          </li>
          <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
            <a href="#contactus" className='lg:hover:text-[#007bff] text-white block font-semibold text-lg'>Contact Us</a>
          </li>
          <li>
            <a href="#buyinsurance" className="lg:hidden">
              <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
                Buy Insurance
              </button>
            </a>
          </li>
          <li>
            <Link to="/agentregistration" className="lg:hidden">
              <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
                Agent Registration
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login" className="lg:hidden">
              <button className='px-4 py-2 text-lg rounded-lg font-bold text-[#004CA1] border-2 bg-white transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

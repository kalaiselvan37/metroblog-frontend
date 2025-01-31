import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-4">
          <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
          <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800">
              Application Layout
              <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-2 start-2 
      bottom-2 z-[60] w-64 bg-gradient-to-b from-blue-300 to-blue-600 border rounded-lg pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-2 
      [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
        style={{
          boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(145deg, #66ccff, #0066ff)',
        }}>
        <div className="px-6">
          <a className="flex text-xl font-semibold" href="#" aria-label="Brand">
            <img src="/images/Metro_Logo.jpg" alt="" className="rounded-lg" />
          </a>
        </div>
        <nav className="flex flex-col flex-wrap w-full p-6 hs-accordion-group" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <NavLink to={'/admindashboard/dashboard'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-blue-600 text-white shadow' : ''} text-sm text-slate-700 hover:text-white rounded-lg hover:bg-blue-700 hover:shadow`)}>
                <i className="fa-solid fa-chart-line"></i>Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admindashboard/blogs'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-blue-600 text-white shadow' : ''} text-sm text-slate-700 hover:text-white rounded-lg hover:bg-blue-700 hover:shadow`)}>
                <i className="fa-solid fa-blog"></i> Create Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to={'/admindashboard/viewblogs'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-blue-600 text-white shadow' : ''} text-sm text-slate-700 hover:text-white rounded-lg hover:bg-blue-700 hover:shadow`)}>
                <i className="fa-solid fa-blog"></i> View Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

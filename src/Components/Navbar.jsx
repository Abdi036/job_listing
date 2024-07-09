import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4 border-b border-gray-500 shadow">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="md:hidden absolute right-5 top-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex-col " : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="#home"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Home
            </a>
            <a
              href="#jobs"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Jobs
            </a>
            <a
              href="#add-jobs"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200"
            >
              Add Jobs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

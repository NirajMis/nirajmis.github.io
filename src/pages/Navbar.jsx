const Navbar = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 375 375"
          >
            <path
              fill="#3B82F6"
              d="m240.324 76.867-52.953 78.766-52.953-79.031h-.27c-34.324 0-62 27.671-62 62v189.46c34.329 0 62-27.671 62-62V180.38l53.223 60.672 52.953-63.067v150.078c34.329 0 62-27.671 62-62V76.868Zm0 0"
            />
          </svg>
          <span class="ml-3 text-xl">Mosaic Event Organizer</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/gallery" class="mr-5 hover:text-white">
            Gallery
          </a>
          <a href="/contact" class="mr-5 hover:text-white">
            Contact Us
          </a>
        </nav>
        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

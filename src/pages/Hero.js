import React from "react";

function Hero() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img class="object-cover object-center rounded" alt="hero" src="https://static.toiimg.com/thumb/86814019.cms?width=680&height=512&imgsize=51588" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Mosaic Event Organizer
          </h1>
          <p class="mb-8 leading-relaxed font-semibold">There are many special moments in the 12 months calendar and in case you want to spend these special occasions like a birthday, anniversary, or wedding in a lavish way, then, you must contact us as we have now launched our decoration services!!.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

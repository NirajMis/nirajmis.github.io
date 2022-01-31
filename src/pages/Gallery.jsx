import React, { useEffect, useState } from "react";
import Header from "./Header";
import Item from "./Item";

function Gallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const url = "https://mosaicevent.deta.dev/api/items";
      const iresponse = await fetch(url);
      const idata = await iresponse.json();
      console.log(idata);
      setItems(idata);
    };
    fetchItems();
  }, []);
  return (
    <>
      <div>
        <section className="text-gray-600 body-font py-4">
          <Header
            hname="Gallery"
            hdescription="Some Pictures On Which We Have Worked!!."
          />
          <div className="container px-4 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item) => {
                return (
                  <Item
                    image={item.image}
                    name={item.name}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;

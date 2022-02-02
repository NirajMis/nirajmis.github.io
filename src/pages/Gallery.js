import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://mosaicevent.deta.dev/api/items');
      const data2json = await response.json();
      setData(data2json);
    };
    fetchData();
  }, []);
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <Header hname="Gallery" hdescription="Some Of Our Images" />
        <div className="flex flex-wrap -m-4">
          {data.map((item) => {
            return (
              <div className="p-4 md:w-1/4" key={item.key}>
                <Card title={item.name} image={item.image} description={item.description} id={item.key} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

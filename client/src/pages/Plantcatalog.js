import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantModal from "../components/Plantmodal";
// var json = require("../plants.json");

function Plantcatalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Plant Catalog";
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species-list?key=sk-dV5A6572678e8eba03389`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="bg-base-100">
      <div id="search-area" className="flex my-6 justify-items-stretch">
        <input
          type="text"
          placeholder="Type here"
          className="w-full max-w-xs justify-self-end input input-bordered m-t-40"
        />
      </div>
      <div className="grid grid-cols-2">
        <div
          id="filters"
          className="flex justify-around m-20 shadow-xl w-80 card w-100 bg-neutral text-neutral-content"
        >
          Filters
        </div>
        <div
          id="catalog"
          className="flex justify-around shadow-xl card w-100 bg-neutral"
        >
          <div className="grid grid-cols-3 gap-4 card-body ">
            {data.map((plant) => {
              return (
                <div
                  key={plant.id}
                  className="shadow-xl min-w-60 max-w-60 max-h-80 min-h-80 card bg-base-100"
                >
                  <figure>
                    <img
                      className="rounded-lg"
                      src={
                        "https://www.marthastewart.com/thmb/vJQe2dgakpFj-EQQJEr0zMkFVVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flowering-plants-statement-flowers-true-lily-getty-0623-cd669979be0249e391880d3f2085674b.jpg"
                      }
                      alt={plant.common_name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{plant.common_name}</h2>
                    <p>{plant.scientific_name}</p>
                    <div className="justify-end card-actions">
                      <PlantModal plant={plant} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="pagination" className="join">
        <button className="join-item btn btn-active">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
}

export default Plantcatalog;

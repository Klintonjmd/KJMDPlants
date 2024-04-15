import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantModal from "../components/Plantmodal";
var json = require("../plants.json");

function Plantcatalog() {
  const [data, setData] = useState(null);

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

  return (
    <div>
      {json.data.map((plant) => {
        return (
          <div key={plant.id} className="shadow-xl card w-96 bg-base-100">
            <figure>
              <img
                className="w-10rem h-10rem"
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
  );
}

export default Plantcatalog;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Plantcatalog() {
  const [data, setData] = useState(null);

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
      {data.map((plant) => {
        return (
          <div className="shadow-xl card w-96 bg-base-100">
            <figure>
              <img
                src={
                  "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg"
                }
                alt={plant.common_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.common_name}</h2>
              <p>{plant.scientific_name}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plantcatalog;

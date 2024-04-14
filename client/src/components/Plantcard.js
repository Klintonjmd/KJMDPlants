function PlantCard({ plant }) {
  <div className="shadow-xl card w-96 bg-base-100">
    <figure>
      <img
        src={"https://creativecommons.org/licenses/by-sa/3.0/deed.en"}
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
  </div>;
}

export default PlantCard;

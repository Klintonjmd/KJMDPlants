function PlantCard({ plant }) {
  <div className="shadow-xl card w-96 bg-base-100">
    <figure>
      <img
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
        <button className="btn btn-primary">View</button>
      </div>
    </div>
  </div>;
}

export default PlantCard;

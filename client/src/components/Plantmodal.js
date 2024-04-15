function PlantModal({ plant }) {
  const id = "my_modal_" + plant.id.toString();
  //need to use id to have unique modals that relate to each plant card.
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        View
      </button>
      <dialog id={"my_modal_1"} className="modal">
        <div className="modal-box rounded-xl">
          <img
            className="shadow-sm rounded-xl"
            src={
              "https://www.marthastewart.com/thmb/vJQe2dgakpFj-EQQJEr0zMkFVVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flowering-plants-statement-flowers-true-lily-getty-0623-cd669979be0249e391880d3f2085674b.jpg"
            }
            alt={plant.common_name}
          />
          <h3 className="pt-4 text-lg font-bold">{plant.common_name}</h3>
          <p className="py-1">Common Name: {plant.common_name}</p>
          <p className="py-1">Scientific Name: {plant.scientific_name}</p>
          <p className="py-1">Cycle: {plant.cycle}</p>
          <p className="py-1">Watering: {plant.watering}</p>
          <ul className="py-1">
            {plant.sunlight.map((sunlight_value) => {
              return <li key={sunlight_value}>{sunlight_value}</li>;
            })}
          </ul>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default PlantModal;

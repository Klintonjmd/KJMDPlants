import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "KJMDPlants";
  }, []);

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">KJMDPlants</h1>
          <p className="py-6">
            KJMDPlants is an all-in-one app that allows you to research plants,
            save plants you like, and track the progress of your own plants and
            garden.
          </p>
          <Link className="" to="/signup">
            <button className="btn btn-primary">Get Started</button>
          </Link>
          <p className="py-6">
            Already have an account?{" "}
            <Link className="" to="/signin">
              <p className="underline">Login here!</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const location = useLocation();
  const user = location.state;

  useEffect(() => {
    document.title = "My Profile";
  }, []);

  return (
    <div>
      {user ? (
        <h4 className="text-xl text-center">Hi, {user}!</h4>
      ) : (
        <div className="min-h-screen hero bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Unable to view profile</h1>
              <p className="py-6">
                It appears you are not signed in. You may choose to sign in or
                return to the home page.
              </p>
              <Link className="" to="/signin">
                <button className="btn btn-primary">Sign In</button>
              </Link>
              <Link className="ml-8" to="/">
                <button className="btn btn-primary">Home</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

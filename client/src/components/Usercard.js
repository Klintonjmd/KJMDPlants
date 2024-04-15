import { Navigate } from "react-router-dom";

function UserCard({
  headerText,
  submitHandler,
  username,
  password,
  setUser,
  setPassword,
  setUsername,
  user,
}) {
  return (
    <div className="shadow-3xl rounded-3xl card-body bg-neutral card w-96 text-primary">
      <h2 className="card-title ">{headerText}</h2>
      <form onSubmit={submitHandler}>
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            htmlFor="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="flex items-center gap-2 my-1 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            htmlFor="username"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="flex justify-between">
          <button className="my-2 btn btn-secondary" type="submit">
            Submit
          </button>
          <button className="my-2 btn btn-accent" type="button">
            Cancel
          </button>
        </div>
        {user ? <Navigate to="/profile" replace={true} state={user} /> : null}
      </form>
    </div>
  );
}

export default UserCard;

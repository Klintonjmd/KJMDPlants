import axios from "axios";
import { useState } from "react";
import UserCard from "../components/Usercard";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signin", {
        username: username,
        password: password,
      })
      .then((data) => {
        console.log(data);
        setUsername(""); //reset values to blank after post (submission)
        setPassword("");
      });
  };
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1678655852256-5fc5670b83eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="bg-opacity-60 hero-overlay"></div>
      <UserCard
        headerText={"Sign In"}
        submitHandler={submitHandler}
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    </div>
  );
}

export default SignIn;

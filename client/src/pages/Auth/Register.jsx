import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../Services/AuthServices";
import { toast } from "react-hot-toast";
import { getErrorMessage } from "../../Utils/ErrorMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  //register function
  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password, username };
      const res = await AuthServices.registerUser(data);
      toast.success(res.data.message);
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={registerHandler}
        className="bg-gray-900 text-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <div className="flex justify-center mb-6">
          <i className="fa-solid fa-circle-user text-6xl text-green-500"></i>
        </div>

        <div className="mb-5">
          <input
            type="text"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-green-500 outline-none"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-green-500 outline-none"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-green-500 outline-none"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-center mb-6">
          <p>
            Already a user? Please{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition-colors py-3 rounded-md font-semibold text-lg"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;

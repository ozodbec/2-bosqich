import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/registerSlice"; // `login` o'rniga `register` ishlatilmoqda
import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { getFormData } from "../getdata";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // `false` o'rniga `null` qilib qo'ydik
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = getFormData(e.target);
    console.log(result);
    setLoading(true);
    try {
      const res = await dispatch(register(result)).unwrap(); // `login` o'rniga `register` ishlatilmoqda
      console.log(res);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-lg font-bold text-center">Register</h2>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <TextInput
            name="username"
            type="text"
            id="username"
            className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <TextInput
            name="password"
            type="password"
            id="password"
            className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••"
            required
          />
        </div>
        <div className="flex items-start mb-2">
          <Link
            to={"/login"}
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            If you have account
          </Link>
        </div>
        <Button
          type="submit"
          className="flex justify-center items-center"
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </div>
  );
}

export default Register;

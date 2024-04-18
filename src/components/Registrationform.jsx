import React, { useState } from "react";
import Uploadpic from "./Uploadpic";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    checkbox: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    let errorsObj = {};

    // Name validation
    if (formData.name.trim() === "") {
      errorsObj.name = "Name is required";
    }

    // Username validation
    if (formData.username.trim() === "") {
      errorsObj.username = "Username is required";
    }

    // Email validation
    if (
      !formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      errorsObj.email = "Must be a valid email address";
    }

    // Password validation
    if (formData.password.length < 6) {
      errorsObj.password = "Password must be 6 or more characters";
    }

    // Checkbox validation
    if (!isChecked) {
      errorsObj.checkbox = "Please accept the terms and conditions";
    }

    // Set errors state based on validation results
    setErrors(errorsObj);

    // If there are no errors, proceed with account creation
    if (Object.keys(errorsObj).length === 0) {
      // Place your account creation logic here
      navigate("/uploadpic", { state: { data: formData } });
    }
  };

  return (
    <div className="md:w-60vw bg-white p-12 md:p-6 ">
      <div className="absolute right-5 top-4">
        <span className="text-gray-600">Already a member?</span>
        <a href="#" className="text-blue-500 hover:text-pink-700 ml-2">
          Sign In
        </a>
      </div>
      <div className="px-14">
        <h2 className="text-2xl font-bold mb-5">Sign up to Dribbble</h2>
        <form onSubmit={handleSubmit} action={<Uploadpic />}>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={
                  errors.name
                    ? "w-full border outline-none bg-red-100 text-red-500 rounded-md p-2"
                    : "w-full border  outline-none bg-gray-200 rounded-md p-2"
                }
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="w-1/2">
              <label className="block font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className={
                  errors.username
                    ? "w-full border outline-none bg-red-100 text-red-500 rounded-md p-2"
                    : "w-full border  outline-none bg-gray-200 rounded-md p-2"
                }
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter User Name"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={
                errors.email
                  ? "w-full border outline-none bg-red-100 text-red-500 rounded-md p-2"
                  : "w-full border  outline-none bg-gray-200 rounded-md p-2"
              }
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={
                errors.password
                  ? "w-full border outline-none bg-red-100 text-red-500 rounded-md p-2"
                  : "w-full border  outline-none bg-gray-200 rounded-md p-2"
              }
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="6+ characters"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="mr-2 outline-none"
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">
              Creating an account means you're okay with our{" "}
              <a className="text-blue-500 hover:text-pink-700 cursor-pointer">
                Terms of Service, Privacy Policy
              </a>
              , and our default{" "}
              <a className="text-blue-500 hover:text-pink-700 cursor-pointer">
                Notification Settings.
              </a>
            </label>
            {errors.checkbox && (
              <p className="text-red-500">{errors.checkbox}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold py-2 px-10 rounded-md hover:bg-pink-600"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm mt-4">
          This site is protected by reCAPTCHA and the Google
          <a href="#" className="text-blue-500 hover:text-pink-700">
            Privacy Policy
          </a>
          and
          <a href="#" className="text-blue-500 hover:text-pink-700">
            Terms of Service
          </a>
          apply.
        </p>
      </div>
    </div>
  );
};

export default Registrationform;

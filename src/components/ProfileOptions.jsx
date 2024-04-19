import React, { useState } from "react";
// import Card from "./Card";
import { useNavigate, useLocation } from "react-router-dom";

const ProfileOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const fetch = useLocation().state.data;
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      setIsFormComplete(false);
    } else {
      setSelectedOption(option);
      setIsFormComplete(true);
    }
  };

  const handlesubmit = () => {
    let updatedData = { ...fetch, selectedOption };
    navigate("/home", { state: { data: updatedData } });
  };
  return (
    <div className="flex flex-col items-center">
      <img
        src="/images/dribble_pink.png"
        alt="dribble logo"
        className="absolute h-9 left-0 top-4"
      />
      <h2 className="text-4xl font-bold mt-12">What brings you to Dribbble?</h2>
      <p className="text-gray-600 my-6">
        Select the options that best describe you. Don't worry, you can explore
        other options later.
      </p>
      <div className="flex flex-col md:flex-row max-sm:items-center justify-center mb-6">
        <div
          className={` w-1/4 min-h-80 min-w-96 flex flex-col items-center justify-center p-4 rounded-lg border-2 border-gray-300 mb-4 md:mb-0 md:mr-4 cursor-pointer ${
            selectedOption === "share"
              ? "bg-white border-pink-600"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleOptionClick("share")}
        >
          <img
            src="/images/1.png"
            alt="Designer Share"
            className="w-full h-28 mb-2"
          />
          <span className="text-center font-bold">
            I'm a designer looking to share my work
          </span>
          {selectedOption === "share" && (
            <div className="mt-4 p-4 rounded-lg text-center">
              <p>
                Share your work with the Dribbble community and get feedback
                from designers around the world.
              </p>
            </div>
          )}
        </div>
        <div
          className={` w-1/4 min-h-80 min-w-96 flex flex-col items-center justify-center p-4 rounded-lg border-2 border-gray-300 mb-4 md:mb-0 md:mr-4 cursor-pointer ${
            selectedOption === "hire"
              ? "bg-white border-pink-600"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleOptionClick("hire")}
        >
          <img
            src="/images/2.png"
            alt="Designer Hire"
            className="w-half h-28 mb-2"
          />
          <span className="text-center font-bold">
            I'm looking to hire a designer
          </span>
          {selectedOption === "hire" && (
            <div className="mt-4 p-4  rounded-lg text-center">
              <p>
                Post a job or freelance project and find the perfect designer
                for your needs.
              </p>
            </div>
          )}
        </div>
        <div
          className={`w-1/4 min-h-80 min-w-96 flex flex-col items-center justify-center p-4 rounded-lg border-2 border-gray-300 mb-4 md:mb-0 cursor-pointer ${
            selectedOption === "inspiration"
              ? "bg-white border-pink-600"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleOptionClick("inspiration")}
        >
          <img
            src="/images/3.png"
            alt="Designer Inspiration"
            className="w-full h-28 mb-2"
          />
          <span className="text-center font-bold">
            I'm looking for design inspiration
          </span>
          {selectedOption === "inspiration" && (
            <div className="mt-4 p-4 text-center rounded-lg">
              <p>
                Explore millions of shots from designers around the world and
                find inspiration for your next project.
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        disabled={!isFormComplete}
        className={`px-4 py-2 rounded-md mt-10 ${
          isFormComplete
            ? "bg-pink-500 text-white"
            : "bg-pink-300 text-white cursor-not-allowed"
        }`}
        onClick={handlesubmit}
      >
        Finish
      </button>
    </div>
  );
};

export default ProfileOptions;

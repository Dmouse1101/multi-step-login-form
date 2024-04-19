import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Uploadpic = () => {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState("");
  const fetch = useLocation().state.data;
  const navigate = useNavigate();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlesubmit = () => {
    let updateData = { ...fetch, avatar, location };
    navigate("/profile", { state: { data: updateData } });
  };

  const isFormComplete = avatar && location.trim().length > 0;

  return (
    <>
      <div className="flex flex-col items-center mx-auto w-full md:w-4/5 max-md:w-3/5 xl:w-2/5">
        <img
          src="/images/dribble_pink.png"
          alt="Dribbble"
          className="h-30 w-40 absolute left-3 top-2 clear-both"
        />
        <div className="w-full md:w-4/5 mt-14 text-left">
          <h2 className="text-2xl font-bold mb-4">
            Welcome! Let's create your profile
          </h2>
          <p className="text-gray-600 mb-6">
            Let others get to know you better! You can do these later
          </p>
          <div className="mb-6">
            <label className="block text-2xl mb-2 font-bold text-gray-700">
              Add an avatar
            </label>
            <div className="relative flex items-center">
              <div className=" w-44 h-44 max-sm:w-20 max-sm:h-20 max-md:w-full max-md:h-full  rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">
                    <i class="fa fa-camera"></i>
                  </span>
                )}
              </div>
              <div className="ml-8">
                <label
                  htmlFor="avatarInput"
                  className="bg-white text-gray-700 rounded-lg border border-gray-300 px-3 py-1 cursor-pointer"
                >
                  Choose image
                </label>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
                <p className="mt-2 text-gray-600">
                  {">"} Or choose one of our defaults
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="text-1xl block mb-2 font-bold text-gray-700">
              Add your location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              spellCheck="false"
              onChange={handleLocationChange}
              placeholder="Enter a location"
              className="w-full px-4 py-2 border-b font-semibold rounded-md border-b-gray-300 focus:bg-slate-100 focus:outline-none"
            />
          </div>
          <button
            disabled={!isFormComplete}
            className={`px-4 py-2 rounded-md w-60 ${
              isFormComplete
                ? "bg-pink-500 text-white"
                : "text-white bg-pink-300 cursor-not-allowed"
            }`}
            onClick={handlesubmit}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Uploadpic;

import React, { useState } from "react";
const CompInfo = () => {
  return (
    <>
      <div class=" h-50vh md:max-w-lg p-7">
        {/* <div class="container mx-auto flex  items-center justify-between"> */}
        <img
          src="/images/dribble.png"
          alt="Dribbble"
          class="h-8 relative left-3 top-4 text-orange-400"
        />
        {/* </div> */}
        <h1 class="text-3xl font-bold mb-4 text-yellow-800 mt-14">
          Discover the world's top Designers & Creatives.
        </h1>
        <div class="relative ">
          <img
            src="/images/dribble_home.png"
            alt="Dribbble"
            class=" h-full max-md:max-h-1/2"
          />
        </div>
        <p className=" text-yellow-800 text-lg">
          Art by{" "}
          <span className=" text-decoration-line: underline cursor-pointer">
            Peter Tarka
          </span>
        </p>
      </div>
    </>
  );
};

export default CompInfo;

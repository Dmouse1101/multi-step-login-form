import React from "react";
import CompInfo from "./CompInfo";
import Registrationform from "./Registrationform";
const Main = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row items-top justify-between bg-amber-200 ">
        <CompInfo />
        {/* registeration form start */}
        <Registrationform />
      </div>
    </>
  );
};

export default Main;

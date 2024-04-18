import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Uploadpic from "./components/Uploadpic";
import ProfileOptions from "./components/ProfileOptions";
import VerifyEmailPage from "./components/VerifyEmailPage";

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <Main /> */}
      {/* <Uploadpic /> */}
      {/* <ProfileOptions /> */}
      {/* <VerifyEmailPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/uploadpic" element={<Uploadpic />} />
          <Route path="/profile" element={<ProfileOptions />} />
          <Route path="/home" element={<VerifyEmailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

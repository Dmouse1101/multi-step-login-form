import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
const VerifyEmailPage = () => {
  const fetch = useLocation().state.data;

  return (
    <>
      {/* Header */}
      <Header propic={fetch.avatar} />
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 py-12">
        <div className="max-w-xl mx-auto rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Please verify your email...
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"></div>
            <a href="">
              <img
                src="/images/mail.png"
                alt="mail"
                className="h-24  text-white"
              />
            </a>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-gray-600 mb-4">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <p className="text-gray-800 font-semibold mb-6">
              account@refero.design
            </p>
            <p className="text-gray-600 mb-4">
              Click the confirmation link in that email to begin using Dribbble.
            </p>
            <p className="text-gray-600 mb-6">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can{" "}
              <a href="#" className="text-pink-600 hover:underline">
                resend the confirmation email
              </a>
              .
            </p>
            <p className="text-gray-600">
              Wrong email address?{" "}
              <a href="#" className="text-pink-600 hover:underline">
                Change it
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default VerifyEmailPage;

"use client";

import Navbar from "@/components/navbar";
import SignUp from "@/components/signup";
import Verified from "@/components/verified";
import OtpVerify from "@/components/otp";
import { useState } from "react";

const SignUpPage = () => {
  const [isSignUpPhase, setIsSignUpPhase] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOTP = () => {
    // Your logic to handle OTP sending
    // you can set the state to switch to the OTP verification phase
    setIsSignUpPhase(false);
  };

  return (
    <div className="font-inter px-6 lg:px-8">
      <Navbar />
      <div className="py-20 lg:py-32">
        <div className="mx-auto text-center max-w-md md:max-w-2xl space-y-10">
          {isSignUpPhase ? (
            <SignUp onSendOTP={handleSendOTP} />
          ) : isVerified ? (
            <Verified />
          ) : (
            <OtpVerify setIsVerified={setIsVerified} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

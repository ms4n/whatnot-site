"use client";

import { ChangeEvent, useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAppSelector } from "@/redux/hooks";

interface OtpVerifyProps {
  onEditPhoneNumber: () => void;
}

const OtpVerify: React.FC<OtpVerifyProps> = ({ onEditPhoneNumber }) => {
  const countryCode = useAppSelector((state) => state.phoneNumber.countryCode);
  const phoneNumber = useAppSelector((state) => state.phoneNumber.phoneNumber);

  const [otp, setOtp] = useState("");

  const customInputStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    border: "2px solid #22c55e",
    borderRadius: "8px",
    margin: "6px",
    fontSize: "16px",
    color: "black",
  };

  return (
    <main className="flex items-center justify-center text-left">
      <Card>
        <CardHeader>
          <CardTitle className="">
            Link your WhatsApp number with Google Suite
          </CardTitle>
          <CardDescription className="">
            Enter the OTP sent to{" "}
            <span>
              {countryCode} {phoneNumber}{" "}
            </span>
            <span
              className="underline cursor-pointer"
              onClick={onEditPhoneNumber}
            >
              Wrong number?
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={customInputStyle}
            renderInput={(props) => <Input {...props} />}
          />
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <CardDescription>
            OTP Valid for 300 seconds.{" "}
            <span className="underline cursor-pointer">Resend</span>
          </CardDescription>
          <Button className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300">
            Verify OTP
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default OtpVerify;

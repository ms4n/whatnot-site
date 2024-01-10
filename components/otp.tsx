"use client";

import { ChangeEvent, useState, useEffect } from "react";
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
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format the countdown in mm:ss format
  const formattedCountdown = `${Math.floor(countdown / 60)}:${(countdown % 60)
    .toString()
    .padStart(2, "0")}`;

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
    <div className="flex items-center justify-center text-left">
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

        <CardFooter className="flex flex-col gap-5">
          <CardDescription>
            {countdown <= 0 ? (
              <>
                OTP Expired.{" "}
                <span className="underline cursor-pointer">Resend</span>
              </>
            ) : (
              <>
                OTP valid for {formattedCountdown} minutes <br /> Didn't recieve
                OTP? <span className="underline cursor-pointer">Resend</span>
              </>
            )}
          </CardDescription>
          <Button className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300">
            Verify OTP
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OtpVerify;

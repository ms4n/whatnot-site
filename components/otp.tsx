"use client";

import { useState, useEffect } from "react";
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
import { useToast } from "@/components/ui/use-toast";

import { verifyOTP, sendOTP } from "@/app/utils/api";

interface OtpVerifyProps {
  setIsVerified: (verified: boolean) => void;
}

const OtpVerify: React.FC<OtpVerifyProps> = ({ setIsVerified }) => {
  const countryCode = useAppSelector((state) => state.phoneNumber.countryCode);
  const phoneNumber = useAppSelector((state) => state.phoneNumber.phoneNumber);

  const [countdown, setCountdown] = useState(30);
  const [cooldown, setCooldown] = useState(false);

  const [otp, setOtp] = useState("");

  useEffect(() => {
    toast({
      className: "bg-green-500 text-white",
      title: "OTP Sent Successfully!",
      description: "Check your WhatsApp for the OTP. Valid for 5 minutes.",
    });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setCooldown(false);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (!cooldown) {
      try {
        const phoneNumberString = (countryCode + phoneNumber).replace(
          /[+ ]/g,
          ""
        );
        await sendOTP(phoneNumberString);

        toast({
          className: "bg-green-500 text-white",
          title: "OTP Resent!",
          description:
            "A new OTP has been sent to your WhatsApp. Please check your messages.",
        });

        console.log("OTP sent successfully");
      } catch (error) {
        toast({
          className: "bg-red-600 text-white",
          variant: "destructive",
          title: "OTP Send Failed",
          description: "An error occurred while sending OTP. Please try again.",
        });
        console.error("Error sending OTP:", error);
        return;
      }

      setCountdown(30);
      setCooldown(true);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const phoneNumberString = (countryCode + phoneNumber).replace(
        /[+ ]/g,
        ""
      );
      const verify = await verifyOTP(phoneNumberString, otp);

      if (verify.data.valid) {
        setIsVerified(true);
      } else {
        toast({
          className: "bg-red-600 text-white",
          variant: "destructive",
          title: "Invalid OTP",
          description: "Please re-enter the OTP or request a new one.",
        });
      }
    } catch (error) {
      toast({
        className: "bg-red-600 text-white",
        variant: "destructive",
        title: "OTP Send Failed",
        description: "An error occurred while sending OTP. Please try again.",
      });
      console.error("Error sending OTP:", error);
      return;
    }
  };

  // Format the countdown in mm:ss format
  const formattedCountdown = `${Math.floor(countdown / 60)}:${(countdown % 60)
    .toString()
    .padStart(2, "0")}`;

  const customInputStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    border: "1px solid #22c55e",
    borderRadius: "8px",
    margin: "6px",
    fontSize: "16px",
    color: "black",
  };

  const { toast } = useToast();

  return (
    <div className="flex items-center justify-center text-left">
      <Card>
        <CardHeader>
          <CardTitle className="">
            Link your WhatsApp number with Google Suite
          </CardTitle>
          <CardDescription className="">
            Enter the OTP sent to {countryCode} {phoneNumber}{" "}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={customInputStyle}
            renderInput={(props) => <Input required {...props} />}
          />
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <CardDescription>
            <>
              {countdown > 0 ? (
                <span>
                  Please wait for {formattedCountdown} before you can resend OTP
                </span>
              ) : (
                <span>
                  Didn&apos;t receive OTP or it expired?{" "}
                  <button
                    onClick={handleResend}
                    disabled={cooldown}
                    className="underline cursor-pointer"
                  >
                    Resend
                  </button>
                </span>
              )}
            </>
          </CardDescription>

          <Button
            onClick={handleVerifyOTP}
            className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300"
          >
            Verify OTP
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OtpVerify;

"use client";

import { ChangeEvent, useState } from "react";
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
              {countryCode} {phoneNumber}.{" "}
            </span>
            <span
              className="underline cursor-pointer"
              onClick={onEditPhoneNumber}
            >
              Wrong number?
            </span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col">
          <Button className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300">
            Send OTP
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default OtpVerify;

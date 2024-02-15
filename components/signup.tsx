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
import { useToast } from "@/components/ui/use-toast";

import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";

import {
  setCountryCode,
  setPhoneNumber,
} from "@/redux/features/phoneNumberSlice";

import { sendOTP } from "@/app/utils/api";

interface SignUpProps {
  onSendOTP: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSendOTP }) => {
  const countryCode = useAppSelector((state) => state.phoneNumber.countryCode);
  const phoneNumber = useAppSelector((state) => state.phoneNumber.phoneNumber);

  const dispatch = useAppDispatch();

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith("+")) {
      dispatch(setCountryCode("+" + e.target.value.slice(1, 4)));
    }
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanedPhoneNumber = e.target.value.replace(/\D/g, "");

    let formattedPhoneNumber = cleanedPhoneNumber.slice(0, 5);
    if (cleanedPhoneNumber.length > 5) {
      formattedPhoneNumber += " " + cleanedPhoneNumber.slice(5, 10);
    }

    dispatch(setPhoneNumber(formattedPhoneNumber));
  };

  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (!countryCode || !phoneNumber) {
      toast({
        className: "bg-red-600 text-white",
        variant: "destructive",
        title: "Phone Number Required",
        description:
          "Please provide your complete phone number, including the country code.",
      });
      return;
    }

    try {
      const phoneNumberString = (countryCode + phoneNumber).replace(
        /[+ ]/g,
        ""
      );
      await sendOTP(phoneNumberString);

      console.log("OTP sent successfully"); // Do something after success
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

    onSendOTP();
  };

  return (
    <main className="flex items-center justify-center text-left">
      <Card>
        <CardHeader>
          <CardTitle className="">
            Link your WhatsApp number with Google Suite
          </CardTitle>
          <CardDescription className="">
            Verify your WhatsApp number with OTP
          </CardDescription>
        </CardHeader>

        <CardContent className="my-4">
          <Label htmlFor="phone">WhatsApp Number</Label>
          <div className="flex gap-4 mt-2">
            <Input
              id="countrycode"
              type="tel"
              value={countryCode}
              required
              onChange={handleCountryCodeChange}
              className="basis-1/4"
            />
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              required
              onChange={handlePhoneNumberChange}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col">
          <Button
            onClick={handleSendOTP}
            className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300"
          >
            Send OTP
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignUp;

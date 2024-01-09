"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Verified = () => {
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

        <CardFooter className="flex flex-col">
          <Button className="bg-green-500 text-white hover:scale-105 transition ring-2 ring-green-300">
            Send OTP
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Verified;

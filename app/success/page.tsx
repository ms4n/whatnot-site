import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Success = () => {
  return (
    <div className="flex items-center justify-center text-left h-screen container max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle className="">
            Your WhatsApp Number is Now Linked with Google Account!
          </CardTitle>
          <CardDescription className="">
            You can now start using the WhatNot app. Checkout some{" "}
            <span className="underline cursor-pointer"> simple commands</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Success;

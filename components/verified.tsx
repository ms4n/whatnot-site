import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import axios from "axios";
import Image from "next/image";

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const Verified = () => {
  const countryCode = useAppSelector((state) => state.phoneNumber.countryCode);
  const phoneNumber = useAppSelector((state) => state.phoneNumber.phoneNumber);

  const phoneNumberString = (countryCode + phoneNumber).replace(/[+ ]/g, "");

  const router = useRouter();

  const handleOauth = async () => {
    axios
      .get("http://localhost:7000/api/auth/google/auth-url", {
        headers: {
          phonenumber: phoneNumberString,
        },
        withCredentials: true,
      })
      .then((response) => {
        router.push(response.data.authUrl);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <main className="flex items-center justify-center text-left">
      <Card className="w-[90%]">
        <CardHeader>
          <CardTitle className="">
            Your OTP has been successfully verified
          </CardTitle>
          <CardDescription className="">
            Link your verified WhatsApp number with your Google Account by
            continuing below
          </CardDescription>
        </CardHeader>
        <div className="flex items-center justify-center mb-8">
          <Image
            onClick={handleOauth}
            className="cursor-pointer hover:scale-105 transition"
            src={"/images/google-light.svg"}
            alt="google oauth login button"
            width={197}
            height={40}
          />
        </div>
      </Card>
    </main>
  );
};

export default Verified;

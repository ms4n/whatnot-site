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
          <CardTitle className="">OTP Verification Successful</CardTitle>
          <CardDescription className="">
            Redirecting you to the Google login page...
          </CardDescription>
        </CardHeader>

        {/* <CardFooter className="flex flex-col"></CardFooter> */}
      </Card>
    </main>
  );
};

export default Verified;

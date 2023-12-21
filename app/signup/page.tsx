import Navbar from "@/components/navbar";
import SignUp from "@/components/signup";

const SignUpPage = () => {
  return (
    <div className="font-inter px-6 lg:px-8">
      <Navbar />
      <div className="py-20 lg:py-32">
        <div className="mx-auto text-center max-w-md md:max-w-2xl">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="flex-shrink-0 p-2">
      <div className="max-w-lg bg-white ring-1 ring-inset ring-gray-500/10 rounded-lg p-4 overflow-hidden">
        <div className="relative w-full h-56">
          <div
            className="absolute inset-0 bg-green-500 rounded-t-lg shadow-lg"
            style={{ filter: "blur(10px)", opacity: 0.4 }}
          ></div>
          <Image
            src="/images/screenshot1.jpg"
            alt="features-screenshot-1"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="rounded-lg relative"
          />
        </div>
        <div className="p-4">
          <a href="#">
            <h5 className="my-2 text-green-500 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="font-normal text-gray-500/80">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="flex-shrink-0 p-2">
      <div className="max-w-xl bg-white ring-1 ring-inset ring-gray-500/10 rounded-lg p-4 overflow-hidden">
        <div className="relative w-full">
          <div
            className="absolute inset-0 bg-green-500 rounded-t-lg shadow-lg"
            style={{ filter: "blur(10px)", opacity: 0.4 }}
          ></div>
          <Image
            src="/images/screenshot1.jpg"
            alt="features-screenshot-1"
            width={700}
            height={300}
            quality={100}
            className="rounded-lg relative"
          />
        </div>
        <div className="p-4">
          <a href="#">
            <h5 className="my-2 text-slate-700 text-lg md:text-xl  font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="text-sm md:text-base tracking-tight text-gray-500/80">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

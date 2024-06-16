import Image from "next/image";
import { FC } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex-shrink-0 p-2 font-inter">
      <div className="max-w-sm md:max-w-md bg-white ring-1 ring-inset ring-gray-500/10 rounded-[24px] px-4 overflow-hidden">
        <div className="p-4">
          <h5 className="my-2 text-green-500 text-lg md:text-xl font-semibold tracking-tight leading-tight">
            {title}
          </h5>
          <p className="text-sm md:text-base tracking-tight text-gray-500">
            {description}
          </p>
        </div>

        <div className="relative w-full pb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={700}
            height={300}
            quality={100}
            className="rounded-[12px] relative"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

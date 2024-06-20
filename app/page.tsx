"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FeatureCard from "@/components/feature-card";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="relative isolate font-inter">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tl from-[#22c55e] to-[#22c55e]/60 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <Navbar />

        <div className="py-12 lg:py-28">
          <div className="mx-auto text-center px-6 max-w-md md:max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-800 md:text-6xl">
              What not can your <span className="text-green-500">WhatsApp</span>{" "}
              do?
            </h1>
            <p className="mt-6 m-auto text-sm md:text-base md:leading-7 sm:max-w-xl max-w-sm leading-6 text-gray-500">
              Seamlessly integrate WhatsApp with Google Suite: Convert messages
              to Google Docs notes, schedule events on Google Calendar, and
              securely save media on Google Drive.
            </p>
            <Button
              className="md:w-52 w-36 h-12 md:my-10 my-8 shadow-xl text-white font-semibold bg-green-500 rounded-lg hover:scale-105 transition ring-2 ring-green-300"
              type="button"
              onClick={() => {
                router.push(
                  "https://api.whatsapp.com/send?phone=15550343831&text=Hello!%20%F0%9F%91%8B"
                );
              }}
            >
              Get Started!
            </Button>
          </div>
          {/* <div className="md:max-w-xl mx-auto px-4 mt-6 md:mt-12">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <FeatureCard
                    title="Hello"
                    description="check check description check"
                    imageSrc="/images/screenshot1.jpg"
                    imageAlt="whatsapp-screenshot-demo1"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    title="Hello"
                    description="check check description check"
                    imageSrc="/images/screenshot1.jpg"
                    imageAlt="whatsapp-screenshot-demo1"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    title="Hello"
                    description="check check description check"
                    imageSrc="/images/screenshot1.jpg"
                    imageAlt="whatsapp-screenshot-demo1"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    title="Hello"
                    description="check check description check"
                    imageSrc="/images/screenshot1.jpg"
                    imageAlt="whatsapp-screenshot-demo1"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}

          <div className="max-w-xs md:max-w-lg mx-auto px-4 mt-6 md:mt-10">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={"/images/docs-final.png"}
                    alt="whatsapp-screenshot-iphone"
                    width={600}
                    height={500}
                    quality={100}
                  />
                  <div className="text-center mt-6 md:mt-10 md:max-w-md mx-auto">
                    <h3 className="md:text-xl font-medium md:font-semibold text-slate-700">
                      Schedule your events on google calendar right on whatsapp!
                    </h3>
                    <p className="text-xs md:text-sm mt-1 text-gray-500">
                      Get a quickly shareable event template link
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="text-center mb-10 md:max-w-md mx-auto">
                    <h3 className="md:text-xl font-medium md:font-semibold text-slate-700">
                      Schedule your events on google calendar right on whatsapp!
                    </h3>
                    <p className="text-xs md:text-sm mt-1 text-gray-500">
                      Get a quickly shareable event template link
                    </p>
                  </div>
                  <Image
                    src={"/images/drive-final.png"}
                    alt="whatsapp-screenshot-iphone"
                    width={600}
                    height={500}
                    quality={100}
                  />
                </CarouselItem>
                <CarouselItem>
                  <div className="text-center mb-10 md:max-w-md mx-auto">
                    <h3 className="md:text-xl font-medium md:font-semibold text-slate-700">
                      Schedule your events on google calendar right on whatsapp!
                    </h3>
                    <p className="text-xs md:text-sm mt-1 text-gray-500">
                      Get a quickly shareable event template link
                    </p>
                  </div>
                  <Image
                    src={"/images/reminder-final.png"}
                    alt="whatsapp-screenshot-iphone"
                    width={600}
                    height={500}
                    quality={100}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

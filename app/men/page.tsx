import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Men() {
  return (
    <main>
      <Navbar />
      <div className="">
        <h1 className="font-aero text-center text-[#fff] text-5xl sm:text-6xl md:text-8xl py-3 sm:py-8 lg:py-11 bg-mens-bg bg-no-repeat background-fit">
          MEN&apos;S
        </h1>
        <div className="flex flex-col md:flex-row gap-9 py-6 sm:py-8 md:py-12 lg:py-16 px-9">
          <div className="relative w-3/5 mx-auto">
            <Image
              src="/men1.png"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="absolute w-full bottom-0 text-center bg-footerText bg-opacity-80 rounded-lg py-2 md:py-4 lg:py-6 text-title font-abhaya">
              <span className=" text-title font-abhaya md:text-xl lg:text-3xl">
                Shirts
              </span>
            </div>
            <Image
              src="/rightarrowsmall.svg"
              alt=""
              width={48}
              height={16}
              className="h-4 absolute right-0 bottom-3 md:bottom-5 lg:bottom-8"
            />
          </div>
          <div className="relative w-3/5 mx-auto">
            <Image
              src="/men2.png"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="absolute w-full bottom-0 text-center bg-footerText bg-opacity-80 rounded-lg py-2 md:py-4 lg:py-6 text-title font-abhaya">
              <span className=" text-title font-abhaya md:text-xl lg:text-3xl">
                Pants
              </span>
            </div>
            <Image
              src="/rightarrowsmall.svg"
              alt=""
              width={48}
              height={16}
              className="h-4 absolute right-0 bottom-3 md:bottom-5 lg:bottom-8"
            />
          </div>
          <div className="relative w-3/5 mx-auto">
            <Image
              src="/men3.png"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="absolute w-full bottom-0 text-center bg-footerText bg-opacity-80 rounded-lg py-2 md:py-4 lg:py-6 text-title font-abhaya">
              <span className=" text-title font-abhaya md:text-xl lg:text-3xl">
                Accessories
              </span>
            </div>
            <Image
              src="/rightarrowsmall.svg"
              alt=""
              width={48}
              height={16}
              className="h-4 absolute right-0 bottom-3 md:bottom-5 lg:bottom-8"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

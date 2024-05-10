import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer flex flex-col lg:flex-row justify-between lg:items-center">
      <div className="lg:pl-[70px] py-12 lg:py-[88px] w-fit lg:w-[45%] mx-auto lg:mx-0">
        <span className="font-abhaya text-footerText text-opacity-70 text-[24px] sm:text-[30px] mb-10 block">
          May we help you?
        </span>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col h-96 justify-between w-fit">
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Contact Us: <br /> samsaraxpb@gmail.com <br /> +91 696996420
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Customer Help
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Shipping Info
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Sign Up
            </span>
          </div>
          <div className="flex flex-col h-96 justify-between w-fit">
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              About Samsara
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Our Promise
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Track My Order
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Gift Cards
            </span>
            <span className="font-abhaya text-footerText text-[18px] sm:text-[24px] block">
              Sign In
            </span>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#fff] mx-auto lg:mx-0 w-[85%] lg:w-0 h-1 lg:h-[550px]"></div>
      <div className="lg:w-[45%] px-[70px] flex flex-col gap-8 lg:gap-0 justify-between lg:h-[636px] py-12 lg:py-[88px]">
        <p className="text-footerText font-abhaya text-[24px] sm:text-[24px]">
          Subscribe
        </p>
        <p className="text-footerText font-abhaya text-[18px] sm:text-[24px] text-opacity-60 w-full border-b-2 border-[#fff]">
          Email Address
        </p>
        <Image
          src="/logo.svg"
          alt=""
          height={219}
          width={219}
          className="mx-auto w-24 lg:w-48"
        />
      </div>
    </footer>
  );
}

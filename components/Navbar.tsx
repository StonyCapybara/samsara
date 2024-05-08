import Image from "next/image";
import localFont from "next/font/local";

const AesRom = localFont({ src: "../public/Aesthetic Romance.ttf" });

export default function Navbar() {
  return (
    <nav className="bg-background flex px-1 justify-between text-title w-full">
      <div className="block">
        <Image src={"/logo.svg"} alt="logo" width={86} height={86} />
      </div>
      <div className={"font-aero flex items-center"}>
        <span className="text-7xl">SAMSARA</span>
      </div>
      <div className="flex items-center gap-4">
        <Image src={"/search.svg"} alt="search" width={16} height={16} />
        <span className="underline">search</span>
        <Image src={"/Shopping cart.svg"} alt="search" width={25} height={25} />
        <Image src={"/menu.svg"} alt="search" width={25} height={25} />
      </div>
    </nav>
  );
}

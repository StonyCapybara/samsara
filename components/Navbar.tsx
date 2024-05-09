import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const AesRom = localFont({ src: "../public/Aesthetic Romance.ttf" });

export default function Navbar() {
  return (
    <nav className="bg-background flex px-1 justify-between text-title w-full">
      <div className="block">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={86}
            height={86}
            className="w-12 sm:w-[86px]"
          />
        </Link>
      </div>
      <div className={"font-aero flex items-center"}>
        <span className="text-5xl md:text-7xl">SAMSARA</span>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={"/search.svg"}
          alt="search"
          width={16}
          height={16}
          className="hidden sm:block"
        />
        <span className="underline w-28 hidden sm:block">
          search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <Image src={"/Shopping cart.svg"} alt="search" width={25} height={25} />
        <Image src={"/menu.svg"} alt="search" width={25} height={25} />
      </div>
    </nav>
  );
}

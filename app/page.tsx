import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[src('/landing.png')]">
        {/* <Image src="/landing.png" width={500} height={400} alt="" /> */}
        <button className="border-white bg-white bg-opacity-10 font-abhaya px-12 py-6">
          women&apos;s collection
        </button>
        <button className="border-white bg-white bg-opacity-10 font-abhaya px-12 py-6">
          men&apos;s collection
        </button>
      </div>
      <h1 className="font-aero text-7xl text-title text-center">
        TRENDING NOW
      </h1>
      <div className="flex justify-between px-[72px]">
        <Image src="/landing_pic2.png" width={650} height={650} alt="" />
      </div>
    </main>
  );
}

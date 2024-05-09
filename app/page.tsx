import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[src('/landing.png')]">
        <Image
          src="/landingpic.png"
          width={500}
          height={400}
          alt=""
          className="w-full"
        />
        <button className="border-[#fff] border rounded-lg bg-[#fff] bg-opacity-10 font-abhaya px-12 py-6 absolute right-24 top-[38rem] text-[#F9EBDE] text-center w-[18rem] text-2xl">
          women&apos;s collection
        </button>
        <button className="border-[#fff] border rounded-lg bg-[#fff] bg-opacity-10 font-abhaya px-12 py-6 absolute right-24 top-[44rem] text-[#F9EBDE] text-center w-[18rem] text-2xl">
          men&apos;s collection
        </button>
      </div>
      <div className="px-[72px]">
        <h1 className="font-aero text-7xl text-title text-center my-6">
          TRENDING NOW
        </h1>
        <div className="flex justify-between gap-24">
          <Image
            src="/landingpic2.png"
            width={650}
            height={650}
            alt=""
            className="w-1/2"
          />
          <div className="font-abhaya">
            <Image src="/uniqlo.png" width={189} height={106} alt="uniqlo" />
            <p className="text-2xl my-8">Linen Blend Short Sleeve Shirt</p>
            <p className="text-[#000] text-opacity-60 text-xl mb-24">
              Meet our Collared Linen Shirt, your summer style staple. Crafted
              from breathable linen, it&apos;s your go-to for laid-back
              elegance. Pair with shorts for a relaxed vibe or dress it up with
              chinos for effortless charm.
            </p>
            <div className="flex w-fit ml-auto gap-8">
              <p className="text-title text-xl">Discover more</p>
              <Image
                src="/rightarrow.svg"
                width={35}
                height={10}
                alt="go"
                className="inline"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between gap-24 text-right my-16">
          <Image
            src="/landingpic3.png"
            width={650}
            height={650}
            alt=""
            className="w-1/2"
          />
          <div className="font-abhaya">
            <Image
              src="/hnm.png"
              width={90}
              height={106}
              alt="hnm"
              className="ml-auto"
            />
            <p className="text-2xl my-8">Tailored Orange Trousers with Belt </p>
            <p className="text-[#000] text-opacity-60 text-xl mb-24">
              Introducing our Tailored Orange Trousers, a vibrant addition to
              your wardrobe. These trousers offer both style and comfort with a
              flattering fit and a pop of colour. Complete with a coordinating
              belt, they&apos;re sure to make a statement wherever you go.
              Elevate your look and stand out from the crowd.
            </p>
            <div className="flex w-fit ml-auto gap-8">
              <p className="text-title text-xl">Discover more</p>
              <Image
                src="/rightarrow.svg"
                width={35}
                height={10}
                alt="go"
                className="inline"
              />
            </div>
          </div>
        </div>
        <h1 className="font-aero text-7xl text-title my-6">FEATURED</h1>
        <div className="flex justify-between gap-24 mb-24">
          <Image
            src="/landingpic4.png"
            width={650}
            height={650}
            alt=""
            className="w-1/2"
          />
          <div className="font-abhaya">
            <Image src="/zara.png" width={189} height={106} alt="zara" />
            <p className="text-2xl my-8 text-title">Rose Printed Sundress</p>
            <p className="text-[#000] text-opacity-60 text-xl mb-24">
              Elevate your summer wardrobe with our Rose Printed Sundress.
              Featuring a charming floral pattern and a flattering fit,
              it&apos;s perfect for picnics in the park or brunch with friends.
              Embrace effortless style and feminine flair with this must-have
              piece.
            </p>
            <div className="flex w-fit ml-auto gap-8">
              <p className="text-title text-xl">Discover more</p>
              <Image
                src="/rightarrow.svg"
                width={35}
                height={10}
                alt="go"
                className="inline"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

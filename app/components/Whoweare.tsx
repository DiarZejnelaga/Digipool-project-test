import Image from "next/image";
import Link from "next/link"; 

export default function WhoWeAre() {
  return (
    <section className="bg-white text-black px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">WHO WE ARE</h3>
          <p className="text-lg mb-6">
            At Digipool, we are a collective of professionals with a deep-rooted
            background in communication and advertising, helping businesses grow
            through their online presence since 2013.
          </p>
          <p className="mb-6">
            Our journey began at Httpool’s Kosovo office, where we built years of
            expertise in digital marketing. In 2022...
          </p>

          
          <Link href="/About">
            <button className="w-[185px] h-[48px] rounded-full border-[1px] border-[#0652FD] px-[25px] py-[12px] gap-[10px] text-[#0652FD] bg-white font-bold hover:bg-[#0652FD] hover:text-white transition-all duration-300 ease-in-out mt-6 mx-auto block">
              Learn More →
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Groupdf.png"
            alt="Group Logo"
            width={330}
            height={335}
            layout="intrinsic"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

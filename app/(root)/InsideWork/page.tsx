"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ToughbookCaseStudy() {
  return (
    <main className="bg-[#0B0C1D] text-white font-sans">
      <Navbar />

      
      <section className="relative w-full h-[500px]">
        <Link href="">
          <Image
            src="/assets/hero.png"
            alt="Hero"
            fill
            className="object-cover cursor-pointer"
          />
        </Link>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center" />
      </section>

      
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-pink-500 font-semibold">PANASONIC TOUGHBOOK</h2>
        <h3 className="text-2xl mt-2">Branding for a market leader</h3>

        <div className="mt-6 text-sm text-gray-300 space-y-3 text-right">
          <p><strong>Client:</strong> Panasonic</p>
          <p><strong>Services:</strong></p>

          <div className="flex flex-col items-end gap-3">
            {["Brand Strategy", "Marketing Campaign", "Advertising Campaign"].map((service, index) => (
              <button
                key={index}
                className="w-[185px] h-[48px] rounded-full border border-white px-6 text-white bg-gray-500 font-bold flex items-center justify-center hover:bg-black transition-all duration-300"
              >
                {service}
              </button>
            ))}
          </div>

          <p>
            <strong>Website:</strong>{" "}
            <Link href="https://www.panasonic.com" className="underline text-blue-400">
              panasonic.com
            </Link>
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center py-6">
        <Image
          src="/assets/Toughbook.png"
          alt="Toughbook Image"
          width={1000}
          height={400}
          className="rounded-xl cursor-pointer object-cover"
        />
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-pink-500 text-left">BACKGROUND</h3>
          </div>
          <div className="text-right space-y-4">
            <h2 className="text-2xl font-semibold">
              <span className="text-white">TOUGHBOOK</span> is a range of rugged devices by Panasonic Connect, including handheld devices, tablets, laptops, and accessories.
            </h2>
            <p className="text-gray-300">
              Tested to their limits during production, TOUGHBOOK products are able to withstand extreme environments, making them ideal for a wide range of industries from the military and emergency services to retail, manufacturing and logistics. Since the first product was released in 1996, TOUGHBOOK has been setting the standard for rugged computing. That’s over 25 years of manufacturing excellence.
            </p>
          </div>
        </div>
      </section>

      
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[250px] overflow-hidden rounded-xl group">
            <Image
              src="/assets/Tough.png"
              alt="Tough"
              width={514}
              height={355}
            />
          </div>
          <div className="relative w-full h-[250px] overflow-hidden rounded-xl group">
            <Image
              src="/assets/Mil.png"
              alt=""
              width={514}
              height={355}
            />
          </div>
        </div>
      </section>

   
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-pink-500 text-left">BACKGROUND</h3>
          </div>
          <div className="text-right space-y-4">
            <h2 className="text-2xl font-semibold">
              <span className="text-white">CHALLENGE</span> is a range of rugged devices by Panasonic Connect, including handheld devices, tablets, laptops, and accessories.
            </h2>
            <p className="text-gray-300">
              TOUGHBOOK already had a well-established brand and consistent messaging. However, evolving and adapting to the ever-changing business landscape is vital for any brand that wants to remain relevant.
              <br /><br />
              They needed a brand messaging refresh to reflect their proposition, boost impact in the market, and ensure they remain front-of-mind for decision-makers. The TOUGHBOOK brand appeals to at least 10 different sectors, so the concept would need the flexibility to reach multiple audiences, while still focusing on the product’s key differentiators.
              <br /><br />
              An added challenge was ensuring the language could be translated into multiple European languages, and that it didn’t rely on English idioms or word play. The solution needed to stand out and be suitably catchy, while maintaining the integrity of the TOUGHBOOK brand. Our brief specified that the team wanted the campaign to include new photography, so we had clear parameters for an impactful creative and could imagine how it could be rolled out across various touchpoints.
            </p>
          </div>
        </div>
      </section>

    
      <section className="w-full flex justify-center py-6">
        <Image
          src="/assets/Tox.png"
          alt="TImage"
          width={1073}
          height={359}
          className="rounded-xl cursor-pointer"
        />
      </section>

    
      <section className="bg-[#0B0C1D] px-6 py-12 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">You may find this interesting</h2>
          <Link href="/Our-work" className="text-sm text-gray-300 hover:text-white underline">
            See all case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-[250px] overflow-hidden rounded-xl group">
            <Image
              src="/assets/12.png"
              alt="1110 Case"
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="relative w-full h-[250px] overflow-hidden rounded-xl group">
            <Image
              src="/assets/Home.png"
              alt="Daikin Case"
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

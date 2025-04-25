"use client";

import React from "react";

const services = [
  {
    image: "/p.svg",
    alt: "Performance Marketing",
  },
  {
    image: "/o.svg",
    alt: "Online Presence Management",
  },
  {
    image: "/c.svg",
    alt: "Creative Design",
  },
  {
    image: "/d.svg",
    alt: "Digital Transformation",
  },
];

export default function Services() {
    return (
        <div className="w-full max-w-[1280px] min-h-[832px] mx-auto bg-black text-white px-6 py-10">

      <section id="services" className="bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-left text-lg text-pink-500 uppercase mb-4 ml-3">── Our Services</h3>
          <br /><br />
          <p className="text-lg ml-7">
            We believe that every successful collaboration starts with understanding your business. <br />
            That’s why we begin with an in-depth session to explore your goals, challenges, and brand <br />
            presence. This helps us craft a tailored strategy that aligns with your needs and objectives.
          </p>
  
          <br /><br />
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-2 rounded-2xl shadow hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  width={493}
                  height={204}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
  
          <p className="mt-10 text-lg text-left ml-6">
            Let’s connect! Feel free to reach out and book a no-commitment call <br />
            —we’d love to learn more
            about your business and explore how we <br />
             can help.
          </p>
        </div>
      </section>
      </div>
    );
  }
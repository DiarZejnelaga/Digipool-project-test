import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Performance Marketing, Advertising & Campaign Management",
      description:
        "We create and manage online ad campaigns to help you reach the right audience and increase sales. Using data-driven strategies, we make sure your ads perform well and deliver the best results for your budget.",
      icon: "/assets/C(1).svg",
    },
    {
      title: "Online Presence Management",
      description:
        "We help businesses build and maintain a strong online presence across websites, social media, and search engines. From content updates to reputation management, we ensure your brand stays visible and relevant.",
      icon: "/assets/D(1).svg",
    },
    {
      title: "Creative Design",
      description:
        "We design eye-catching visuals that make your brand stand out. Whether it's logos, social media posts, or website graphics, we create professional and engaging designs that connect with your audience.",
      icon: "/assets/A.svg",
    },
    {
      title: "Digital Transformation Consultancy & Implementation",
      description:
        "We guide businesses through the digital transition, helping them use technology to improve operations and customer experiences. From automation to new digital tools, we make sure your business stays competitive in the modern world.",
      icon: "/assets/B.svg",
    },
  ];

  return (
<section className="bg-black text-white py-20 px-10 sm:px-16 md:px-24 lg:px-20 xl:px-20">

  <div className="max-w-7xl mx-auto">

      <div className="flex items-center mb-8">
            <span className="inline-block flex-shrink-0 w-12 h-px bg-pink-500 mr-4"></span>
            <span className="text-pink-500 uppercase tracking-widest font-semibold">
              Our Services
            </span>
          </div>
          <p className="text-xl">We believe that every successful collaboration starts with understanding your business. <br />
           That’s why we begin with an in-depth session to explore your goals, challenges, and brand <br />
            presence. This helps us craft a tailored strategy that aligns with your needs and objectives.</p> <br /><br />
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-black border border-gray-700 rounded-lg p-6 overflow-hidden flex flex-col justify-between"
              style={{ width: "493px", height: "204px" }}
            >
              {/* Light pink glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 blur-2xl"></div>

              <div className="relative z-10 flex flex-col">
                {/* Icon */}
                <div className="mb-3">
                  <Image
                    src={service.icon}
                    width={48}
                    height={48}
                    alt={`${service.title} icon`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-pink-500 text-base font-semibold leading-tight mb-2 truncate">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-snug line-clamp-4">
                  {service.description}
                </p>
              </div> 
            </div>
          ))}
        </div>
        <br /><br />
        <p className="text-xl">Let’s connect! Feel free to reach out and book a no-commitment call <br />
        —we’d love to learn more about your business and explore how we <br /> can help.</p>
      </div>
    </section>
  );
}

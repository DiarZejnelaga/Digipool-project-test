"use client";

import { useState } from "react";
import Footer from "./Footer";

const servicesList = [
  "Communication design",
  "education consulting",
  "E-commerce",
  "business growth",
  "social promotions",
  "digital strategy"
];

const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const payload = {
      ...formData,
      services: selectedServices,
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.result === "success") {
        setSuccess("Message sent successfully!");
        setFormData(defaultFormData);
        setSelectedServices([]);
        (document.querySelector('input[name="firstName"]') as HTMLInputElement)?.focus();
      } else {
        setError(`Failed to send message: ${data.message}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Request failed:", error.message);
        setError("Failed to send message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-black bg-[url('/assets/Black.png')] bg-cover bg-center min-h-screen text-white py-16 px-6 md:px-20 flex-grow">

      <br /><br />  
        <h3 className="text-pink-500 font-semibold mb-2">LET'S TALK</h3>
        <h1 className="text-4xl font-semibold mb-10">How can we help?</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
              className="bg-[#2c2c2c] p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              required
              className="bg-[#2c2c2c] p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email*"
              required
              className="bg-[#2c2c2c] p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-[#2c2c2c] p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          
          <div>
            <p className="mb-2">Which service are you most interested in?</p>
            <p className="text-sm text-gray-400 mb-4">Select any that apply</p>
            <div className="flex flex-wrap gap-3">
              {servicesList.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedServices.includes(service)
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-[#2c2c2c] text-white border-transparent hover:border-pink-500"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

         
          <div>
            <p className="mb-2">What can Digipool support with?</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Please give as much detail as possible..."
              className="bg-[#2c2c2c] p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            />
          </div>

         
          <p className="text-sm text-gray-500">
            *Required fields
            <br />
            By sending us an enquiry you are agreeing to Digipool{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </p>

          
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-[#111] to-[#111] border border-pink-500 text-white py-3 px-6 rounded-full transition-colors duration-300 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

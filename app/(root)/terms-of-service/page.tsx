import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />

      {/* ✅ Black bar always visible below Navbar */}
      <div className="bg-black w-full h-[80px]"></div>

      {/* ✅ Desktop version with left margin */}
      <div
        className="hidden md:block mx-auto overflow-auto bg-white"
        style={{
          marginTop: "100px",
          marginLeft: "70px",
          width: "896px",
          fontFamily: "'Gotham', sans-serif",
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "35px",
          letterSpacing: "-0.05em",
          padding: "8px 16px",
          color: "#333",
        }}
      >
        <TermsContent />
      </div>

      {/* ✅ Mobile version without sidebar margin */}
      <div className="block md:hidden bg-white px-4 py-8 text-base text-[#333] font-light leading-relaxed">
        <TermsContent />
      </div>

      <Footer />
    </>
  );
}

function TermsContent() {
  return (
    <>
      <div className="flex items-center mb-8">
        <span className="inline-block w-12 h-px bg-pink-500 mr-4" />
        <span className="text-pink-500 uppercase tracking-widest font-semibold">
          Terms of Service
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">DIGIPOOL Terms of Service</h1>
      <p className="mb-6">
        Welcome to DIGIPOOL. By using our platform and services, you agree to the following Terms of Service. Please read them carefully.
      </p>

      <Section title="Acceptance of Terms">
        By accessing or using DIGIPOOL’s website, applications, or services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
      </Section>

      <Section title="Services Overview">
        DIGIPOOL provides tools and solutions designed to boost productivity, collaboration, and operational efficiency for businesses. Specific features and functionalities are detailed in our platform documentation.
      </Section>

      <Section title="Use of Email Services">
        <p>DIGIPOOL may use email for:</p>
        <ul className="list-disc list-inside ml-4 my-2">
          <li>Account registration and verification.</li>
          <li>Communication regarding service updates, notifications, or maintenance.</li>
          <li>Marketing purposes, including newsletters and promotional offers.</li>
        </ul>
        <p className="mt-2">
          By using DIGIPOOL, you consent to receiving such communications. You can manage your preferences or unsubscribe at any time by following the instructions provided in the email.
        </p>
        <p className="mt-2">Users are prohibited from using DIGIPOOL’s email-related services to:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Send spam or unsolicited communications.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>
      </Section>

      <Section title="Account Responsibilities">
        Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their accounts. You must notify us immediately of any unauthorized use or security breaches.
      </Section>

      <Section title="Data Privacy">
        Your use of DIGIPOOL is governed by our Privacy Policy. We prioritize the security and confidentiality of your information.
      </Section>

      <Section title="Content and Intellectual Property">
        All content, trademarks, and materials provided by DIGIPOOL are the exclusive property of DIGIPOOL LLC. Users are not permitted to reproduce, distribute, or modify our intellectual property without prior consent.
      </Section>

      <Section title="Limitation of Liability">
        DIGIPOOL shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.
      </Section>

      <Section title="Termination">
        We reserve the right to suspend or terminate your access to DIGIPOOL’s services at our discretion, including but not limited to violations of these Terms of Service.
      </Section>

      <Section title="Changes to the Terms">
        We may update these Terms of Service from time to time. Continued use of our services after changes are made constitutes your acceptance of the updated terms.
      </Section>

      <Section title="Contact Information">
        Email: <a href="mailto:info@digipool.al" className="text-pink-500">info@digipool.al</a>
      </Section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

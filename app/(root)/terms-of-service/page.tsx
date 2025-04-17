
import React from "react";
import Footer from "@/app/components/Footer";

export default function Terms() {
  return (
    <>

    <br /><br />

    
      <div className="bg-white text-black p-10 min-h-screen pb-20">
      <h2 className="text-4xl fond-bold text-pink-500">Terms of service</h2>

      <br /><br />
        <h1 className="text-4xl font-bold mb-6">DIGIPOOL Terms of Service</h1>

        <p className="mb-6">
          Welcome to DIGIPOOL. By using our platform and services, you agree to the following Terms of Service. Please read them carefully.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Acceptance of Terms</h2>
          <p>
            By accessing or using DIGIPOOL’s website, applications, or services, you agree to be bound by these Terms of Service.
            If you do not agree, you may not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Services Overview</h2>
          <p>
            DIGIPOOL provides tools and solutions designed to boost productivity, collaboration, and operational efficiency for businesses.
            Specific features and functionalities are detailed in our platform documentation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Use of Email Services</h2>
          <p>DIGIPOOL may use email for:</p>
          <ul className="list-disc list-inside ml-4 my-2">
            <li>Account registration and verification.</li>
            <li>Communication regarding service updates, notifications, or maintenance.</li>
            <li>Marketing purposes, including newsletters and promotional offers.</li>
          </ul>
          <p className="mt-2">
            By using DIGIPOOL, you consent to receiving such communications. You can manage your preferences or unsubscribe
            at any time by following the instructions provided in the email.
          </p>
          <p className="mt-2">
            Users are prohibited from using DIGIPOOL’s email-related services to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Send spam or unsolicited communications.</li>
            <li>Violate any applicable laws or regulations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Account Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account credentials and for all activities
            conducted under their accounts. You must notify us immediately of any unauthorized use or security breaches.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Data Privacy</h2>
          <p>
            Your use of DIGIPOOL is governed by our Privacy Policy. We prioritize the security and confidentiality of your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Content and Intellectual Property</h2>
          <p>
            All content, trademarks, and materials provided by DIGIPOOL are the exclusive property of DIGIPOOL LLC.
            Users are not permitted to reproduce, distribute, or modify our intellectual property without prior consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
          <p>
            DIGIPOOL shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to DIGIPOOL’s services at our discretion,
            including but not limited to violations of these Terms of Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Changes to the Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services after changes are made
            constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>Email: <a href="mailto:info@digipool.al" className="text-pink-500">info@digipool.al</a></p>
        </section>
      </div>

      <Footer />
    </>
  );
}

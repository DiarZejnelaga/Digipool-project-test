import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Centralized company info for reuse
const companyInfo = {
  name: "DIGIPOOL L.L.C.",
  email: "info@digipool.al",
  addressLine: "Rruga Malush Kosova, Hy.5"
};

export default function PrivacyPolicyReplica() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-20 bg-black" />
      <Navbar />

      {/* Main Content Container */}
      <div
        className="mx-auto overflow-auto bg-white max-md:mx-4 max-md:w-auto max-md:mt-20 max-md:px-4 max-md:py-4 md:ml-[70px] md:w-[896px]"
        style={{
          marginTop: "100px",
          fontFamily: "'Gotham', sans-serif",
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "35px",
          letterSpacing: "-0.05em",
          padding: "8px 16px",
          color: "#333",
        }}
      >
        {/* Privacy Policy Header */}
        <div className="flex items-center mb-6 md:mb-8">
          <span className="inline-block w-8 md:w-12 h-px bg-pink-500 mr-3 md:mr-4" />
          <span className="text-pink-500 uppercase tracking-widest font-semibold text-sm md:text-base">
            Privacy Policy
          </span>
        </div>
        <br />

        {/* Policy Content */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Privacy Policy for {companyInfo.name}</h1>

        <div className="mb-4 md:mb-6">
          <p className="max-md:text-base max-md:leading-7">
            Your privacy is important to us, and we are dedicated to safeguarding your personal data <br />in accordance with
            applicable data protection laws. This privacy policy explains what personal data we collect,<br /> how we use it,
            and your rights concerning your data.
          </p>
        </div>

        {/* Data Controller Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">1. Data Controller</h2>
          <div className="space-y-1 max-md:text-base">
            <p className="font-medium">{companyInfo.name}</p>
            <p>{companyInfo.addressLine}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-blue-600 break-all">
                {companyInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Data We Collect Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">2. Data We Collect</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 max-md:text-base">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, postal address.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, access times, pages visited.
            </li>
            <li>
              <strong>Contract Data:</strong> Company details, contract specifics, payment information.
            </li>
            <li>
              <strong>Technical Data:</strong> Log files and details about the device you use.
            </li>
          </ul>
        </div>

        {/* Purposes Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">3. Purposes of Data Processing</h2>
          <ol className="list-decimal pl-4 md:pl-6 space-y-2 max-md:text-base">
            <li>To provide and improve our services</li>
            <li>To manage contractual and business relationships</li>
            <li>To analyze and optimize our website and marketing efforts</li>
            <li>To comply with legal obligations</li>
          </ol>
        </div>

        {/* Legal Basis Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">4. Legal Basis for Processing Data</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 max-md:text-base">
            <li>Consent (Art. 6(1)(a) GDPR)</li>
            <li>Contractual Necessity (Art. 6(1)(b) GDPR)</li>
            <li>Legitimate Interests (Art. 6(1)(f) GDPR)</li>
          </ul>
        </div>

        {/* Data Retention Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">5. Data Retention and Deletion</h2>
          <p className="max-md:text-base max-md:leading-7">
            We retain your personal data only as long as necessary to fulfill the purposes for which it was <br /> collected or
            to comply with legal requirements. Once the retention period expires,<br /> we will securely delete or anonymize
            your data.
          </p>
        </div>

        {/* Third Parties Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">6. Sharing Data with Third Parties</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 max-md:text-base">
            <li>
              <strong>Legal Obligations:</strong> We may be required to share your data in response to legal requests,
              such as from regulatory authorities or courts.
            </li>
          </ul>
        </div>

        {/* Data Security Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">7. Data Security</h2>
          <p className="max-md:text-base max-md:leading-7">
            We employ appropriate technical and organizational measures to protect your personal data from unauthorized
            access, loss, or misuse. Our servers, hosted by AWS in Frankfurt, Germany, comply with GDPR requirements.
          </p>
        </div>

        {/* Your Rights Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">8. Your Rights</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-2 max-md:text-base">
            <li>Right to Access</li>
            <li>Right to Rectification</li>
            <li>Right to Erasure</li>
            <li>Right to Restrict Processing</li>
            <li>Right to Data Portability</li>
          </ul>
        </div>

        {/* Policy Changes Section */}
        <div className="pb-4 md:pb-6 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">9. Changes to This Privacy Policy</h2>
          <p className="max-md:text-base max-md:leading-7">
            We may update this privacy policy from time to time. The latest version will always be available on our
            website.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-8">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">10. Contact Us</h2>
          <p className="max-md:text-base max-md:leading-7">
            If you have any questions regarding your personal data or wish to exercise any of your rights, please
            contact us at the details provided above.
          </p>
        </div>

        {/* Customization Points */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-8">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">Key Customization Points:</h2>
          <div className="space-y-3 text-sm md:text-base">
            <p className="max-md:text-xs">
              1. Company Name: Replace &quot;{companyInfo.name}&quot; with your official company name if different.
            </p>
            <p className="max-md:text-xs">
              2. Contact Information: Ensure the email addresses provided (e.g., {companyInfo.email}) are correct and up to date.
            </p>
            <p className="max-md:text-xs">
              3. Data Collection &amp; Use: Ensure the types of data and purposes match your business operations.
            </p>
            <p className="max-md:text-xs">
              4. Service Providers: If you use other service providers, list them here.
            </p>
            <p className="max-md:text-xs">
              5. Legal Obligations: Adapt if subject to specific regional laws (e.g., CCPA).
            </p>
          </div>
        </div>
      </div>

      <br /><br />
      <Footer />
    </div>
  );
}

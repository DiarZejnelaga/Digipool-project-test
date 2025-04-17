

import Footer from '@/app/components/Footer'; 
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy | Digipool</title>
        <meta name="description" content="Privacy policy of Digipool." />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Data Controller</h2>
          <p>
            The entity responsible for the processing of your personal data under the General Data Protection Regulation (GDPR) is:
          </p>
          <p>
            <strong>DIGIPOOL L.L.C.</strong>
            <br />
            Address: Rruga Malush Kosova, Hy.5
            <br />
            Email: <a href="mailto:info@digipool.al" className="text-blue-600">info@digipool.al</a>
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Data We Collect</h2>
          <p>We collect personal data when it is necessary for the operation of our website and services. The types of data we collect include:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Contact Information: Name, email address, phone number, postal address.</li>
            <li>Usage Data: IP address, browser type, access times, pages visited.</li>
            <li>Contract Data: Information you provide when using our services, such as company details, contract specifics, and payment information.</li>
            <li>Technical Data: Log files and details about the device you use to access our website.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Purposes of Data Processing</h2>
          <p>We process your personal data for the following purposes:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>To provide and improve our services.</li>
            <li>To manage contractual and business relationships.</li>
            <li>To analyze and optimize our website and marketing efforts.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Legal Basis for Processing Data</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Consent</strong> (Art. 6(1)(a) GDPR): When you give us permission to process your data, such as when you subscribe to our newsletter.
            </li>
            <li>
              <strong>Contractual Necessity</strong> (Art. 6(1)(b) GDPR): To fulfill a contract you are a part of.
            </li>
            <li>
              <strong>Legitimate Interests</strong> (Art. 6(1)(f) GDPR): For purposes such as service improvement, securing our infrastructure, and marketing.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Data Retention and Deletion</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes for which it was collected or to comply with legal requirements. Once the retention period expires, we will securely delete or anonymize your data.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Sharing Data with Third Parties</h2>
          <p>We do not share your personal data with third parties unless you have explicitly consented to it or in the following situations:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Legal Obligations: We may be required to share your data in response to legal requests, such as from regulatory authorities or courts.</li>
            <li>Service Providers: We may share your data with third-party service providers who assist in the operation of our website or services (e.g., payment processors, email marketing platforms). These providers are contractually bound to protect your data.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Right to Access: You can request confirmation as to whether your data is being processed, and if so, request access to it.</li>
            <li>Right to Rectification: You can request corrections to inaccurate or incomplete data.</li>
            <li>Right to Erasure: You can ask us to delete your data if it is no longer needed or if you withdraw your consent.</li>
            <li>Right to Restrict Processing: You can request that we limit the processing of your data if there is a dispute over its accuracy or legality.</li>
            <li>Right to Data Portability: You can request your personal data in a structured, commonly used, and machine-readable format.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect changes in legal, technical, or operational matters. The latest version will always be available on our website.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>If you have any questions regarding your personal data or wish to exercise any of your rights, please contact us at the details provided above.</p>
        </section>
      </main>

      <Footer /> 

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Digipool. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;


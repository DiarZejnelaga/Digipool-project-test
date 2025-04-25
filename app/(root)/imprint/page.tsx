import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Imprint() {
  return (
    <>
      <Navbar />
      <div className="bg-black"
      style={{width: "1280px", height: "80px"}}></div>
      {/* Main content wrapper */}
      <div className="bg-white text-gray-900 min-h-screen pb-20">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Section title with pink underline */}
          <div className="flex items-center mb-8">
            <span className="inline-block flex-shrink-0 w-12 h-px bg-pink-500 mr-4"></span>
            <span className="text-pink-500 uppercase tracking-widest font-semibold">
              Imprint
            </span>
          </div>

          {/* Company Name */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Company Name</h2>
            <p>Digipool L.L.C.</p>
          </div>

          {/* Company Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Company Info</h2>
            <p>Rruga Malush Kosova, Hy.5</p>
            <p>Prishtinë, Kosovë</p>
            <p>NUI: 812095702</p>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              <a href="mailto:info@digipool.al" className="text-pink-500">
                info@digipool.al
              </a>
            </p>
            <p className="mt-1">+383 49 855 840</p>
          </div>

          {/* Managing Director */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Managing Director</h2>
            <p>Shpat Begolli</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

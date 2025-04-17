import Footer from "@/app/components/Footer";
import Link from "next/link";



export default function Imprint() {
    return (
        <>
        <br /><br />
            <div className="bg-white text-black p-10 min-h-screen pb-20">
                <h1 className="text-4xl font-bold mb-6 text-pink-500">Imprint</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Company Name</h2>
                    <p>Digipool L.L.C.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Company Info</h2>
                    <p>Rruga Malush Kosova, Hy.5</p>
                    <p>Prishtinë, Kosovë</p>
                    <p>NUI : 812095702</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p>Email: <a href="mailto:info@digipool.al" className="text-pink-500">info@digipool.al</a></p>
                    <p>Phone: +383 49 855 840</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Managing Director</h2>
                    <p>Shpat Begolli</p>
                </div>
            </div>

            <Footer />
        </>
    );
}

"use client";


import Image from "next/image";
import Navbar from "../components/Navbar";

import Clients from "../components/Clients";
import Whoweare from "../components/Whoweare";
import Services from "../components/Services";
import Work from "../components/WorkWithUs";
import Footer from "../components/Footer"

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  
  useEffect (() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  
  
  
  
  
  return (
  <>
  <main className="bg-black text-white min-h-screen p-6">
    
    <section className="text-left m-16">
      <h2 className="text-4xl text-white font-light text-left">
        This is our first step in what we hope to be a long lasting{" "}
        <span className="font-bold">collaboration</span>.
      </h2>
      
 
  
       <img src="infinity.png" alt="" height={383} width={737}/>


      <p>
        Please feel free to explore who we are, the work we do, and work we
        completed. Please contact us—we are eagerly waiting to get to know you!
      </p>
<br /><br />
      
    </section>
    <Clients />
  </main>
  <Whoweare />
 <Link href="/Services">
  <Services />
  </Link>
  <Work />

  

  <Footer />
  </>
  );
}















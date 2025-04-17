"use client";

import { title } from "process";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";



        const services = [ {
            title: "Performance Marketing, Advertising & Campaign Management",
            description:"We create and manage online ad campaigns to help you reach the right audience and increase sales. Using data-driven strategies, we make sure your ads perform well and deliver the best results for your budget.",
        },
        {
         title: "Online Presence Management",
         description:"We help businesses build and maintain a strong online presence across websites, social media, and search engines. From content updates to reputation management, we ensure your brand stays visible and relevant."
        },
        {
            title:"Creative Design",
            description:"We design eye-catching visuals that make your brand stand out. Whether it’s logos, social media posts, or website graphics, we create professional and engaging designs that connect with your audience."
        },
        {
            title:"Digital Transformation Consultancy & Implementation",
            description:"We guide businesses through the digital transition, helping them use technology to improve operations and customer experiences. From automation to new digital tools, we make sure your business stays competitive in the modern world"
        },
        ]
        export default function Services() {
           return (
            <section id="services" className="bg-black text-white px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-ig text-pink-500 uppercase mb-4">Our Services</h3>
                    <p>We believe that every successful collaboration starts with understanding your business. That’s why we begin with an in-depth session to explore your goals, challenges, and brand presence. This helps us craft a tailored strategy that aligns with your needs and objectives.</p>
                    <br />
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ig:grid-cols-4">
                        {services.map((services, index) => (
                            <div
                            key={index}
                            style={{backgroundColor: "#1D1D1F80", 
                                    border: "1px solid #404040" 
                            }} 
                            className="text-white p-6 rounded-2xl shadow hover:shadow-xl transitionduration-300"
                            >
                                <div className="text-4xl mb-4"></div>
                                <h4 className="text-pink-500 text-xl font-semibold mb-2">{services.title}</h4>
                                <p className=".=text-sm text-gray-300">{services.description}</p>
                            </div>
                            
                        ))}
                        <p>Let’s connect! Feel free to reach out and book a no-commitment call—we’d love to learn more about your business and explore how we can help.</p>
                    </div>
                </div>

            </section>
           )
        }
    

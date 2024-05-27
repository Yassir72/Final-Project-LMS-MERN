import Hero from "../hero/hero";
import Course from "../Courses/courses";
import Pricing from "../pricing/pricing";
import Contact from "../contact/contactForm";
import Subscribe from "../subscribe/subscribe";
import Feedback from "../reviews/feedback";
import React from "react";
import Navbar from "@/nav";
import Footer from "@/footer";

const Landing = ()=>{
    return(
        <div >
            <Navbar/>
            <section className="min-h-screen bg-gray-100 flex items-center justify-center" id="hero">
                <Hero/>
            </section>
            <section className="bg-white border py-20 w-full h-full overflow-x-hidden" id="courses">
                <div className="container mx-auto">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black-800">
                   Our Courses
            </h2>
                <Course/>
                </div>
            </section>
            <section>
                <Feedback/>
            </section>
            <section id="pricing">
                <Pricing/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            <section id="sub">
                <Subscribe/>
            </section>
            <Footer/>

        </div>
    )
}

export default Landing
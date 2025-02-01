import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FK Tech Home",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in, necessitatibus sunt soluta, saepe sit doloremque blanditiis esse est a consectetur voluptatem quia deserunt aspernatur quas quasi minus dolorum tempore. ",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <About />
      {/* <CallToAction /> */}
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      {/* <Contact /> */}
      <Clients />
      <CallToAction />
    </main>
  );
}

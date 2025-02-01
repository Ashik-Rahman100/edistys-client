import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const philosophyData = [
  {
    id: 1,
    name: "Full-suite solutions",
    content:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: "/images/testimonials/image-1.svg",
  },
  {
    id: 2,
    name: "Simplify the complex",
    content:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    image: "/images/testimonials/image-2.avif",
  },
  {
    id: 3,
    name: "Cutting-edge tech",
    content:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    image: "/images/testimonials/image-3.svg",
  },
];

const Testimonials = () => {
  return (
    <section className=" px-3 py-20   lg:px-24">
      <div className="container px-4">
        <SectionTitle
          subtitle="OUR PHILOSOPHY"
          title="Human-centred innovation"
          paragraph=""
          width="1200px"
          center
        />

        <div className="mt-[60px]">
          <Image
            width={1400}
            height={400}
            src={"/images/philosophy/main.avif"}
            alt="philosophy"
            className="w-full"
          />
        </div>

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {philosophyData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

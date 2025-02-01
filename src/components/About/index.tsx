import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className=" px-3 pb-8 pt-20 lg:px-24  lg:pb-36">
      <SectionTitle
        paragraph=""
        width="1200"
        subtitle="TECHNOLOGY BUILT FOR YOU"
        title="The future of finance"
        center
      />
      <div className="container mt-10 rounded-lg border p-16 shadow-md">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap  items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <p className="py-8 text-xl font-bold text-primary">
                  CUSTOMER FOCUSED
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0b305b]  sm:text-[36px] sm:leading-[1.2]">
                  Purpose-built financial services
                </h2>
                <strong className="mb-10 leading-relaxed text-[#0b305b] ">
                  Navigate through the evolving regulatory landscape with
                  confidence by streamlining compliance management—through
                  real-time risk monitoring solutions powered by AI and machine
                  learning.
                  <br /> <br />
                </strong>
                <p className="leading-relaxed text-[#0b305b]">
                  Transform your compliance strategy with flexible and
                  diversified policy rules, powered by cutting-edge technology
                  that is designed for seamless integration with core banking
                  and card payment systems.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 ">
                  <div>
                    <Image
                      src="/images/finance/image-1.avif"
                      alt="about image"
                      height={600}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

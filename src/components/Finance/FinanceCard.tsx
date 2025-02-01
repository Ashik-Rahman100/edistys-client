import Image from "next/image";

const FinanceCard = ({ finance }: any) => {
  return (
    <section id="about" className=" px-3 pb-8 pt-7 lg:px-24  lg:pb-36">
      <div className="container mt-10 rounded-lg border p-16 shadow-md">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap  items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <p className="py-8 text-xl font-bold text-primary">
                  {finance.tag}
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0b305b]  sm:text-[36px] sm:leading-[1.2]">
                  {finance.title}
                </h2>
                <strong className="mb-10 leading-relaxed text-[#0b305b] ">
                  {finance.strongDescription}
                  <br /> <br />
                </strong>
                <p className="leading-relaxed text-[#0b305b]">
                  {finance.description}
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 ">
                  <div>
                    <Image
                      src={finance.image}
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

export default FinanceCard;

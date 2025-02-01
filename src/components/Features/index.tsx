import Image from "next/image";

const Features = () => {
  return (
    <section className="px-3 pb-8 pt-20 dark:bg-dark lg:px-24 lg:pb-[70px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <p className="font-bold text-primary">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h1 className="py-10 text-6xl font-bold text-[#164377]">
            Uncovering new ways to delight customers
          </h1>
          <p className="py-8 font-bold text-[#164377]">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#164377]">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <div>
          <Image
            width={500}
            height={700}
            src={"/images/New folder/image.avif"}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

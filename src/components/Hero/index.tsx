const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-primary px-3 pt-[120px] md:pt-[130px] lg:px-24 lg:pt-[160px]"
        style={{
          backgroundColor: "#3758f9",
          backgroundImage: "url('/images/hero/banner-img.avif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* style={{
        background: "linear-gradient( 10deg, #3758f9  60%)",
      }} */}
        <div className="container flex flex-col gap-4 lg:grid-cols-2 lg:flex-row">
          <div>
            <h1 className="text-6xl  font-bold text-white">
              Embrace the <br /> future of finance
            </h1>
            <p className="py-8 font-bold text-white">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <button
              className={`btn rounded bg-orange-500 px-14 py-3 text-base font-bold text-white duration-300 ease-in-out`}
            >
              Reach Out to Us
            </button>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;

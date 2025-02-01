const CallToAction = () => {
  return (
    <section
      style={{
        background: "linear-gradient( 9deg, #3758f9  60%, white 40% )",
      }}
      className="relative z-10 overflow-hidden bg-primary px-3 py-20   lg:px-28 lg:py-[115px]"
    >
      <h1 className="text-bold pt-36  text-7xl text-white">Legacy no longer</h1>
      <p className="py-6 text-white">
        Talk to us to find out how we can transform your organisation for the
        future
      </p>
      <button
        className={`btn rounded bg-orange-500 px-14 py-3 text-base font-bold text-white duration-300 ease-in-out`}
      >
        Contact Us
      </button>
    </section>
  );
};

export default CallToAction;

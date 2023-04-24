const BoostSection = () => {
  return (
    <section className="h-[300px] bg-bgBoostMobile bg-secondary bg-contain bg-no-repeat bg-right-top md:h-[250px] md:bg-bgBoostDesktop md:bg-cover">
      <div className="flex flex-col justify-center items-center gap-[25px] w-full h-full text-white">
        <h2 className="text-2xl font-bold lg:text-5xl">Boost your links today</h2>
        <button className="w-[200px] h-[55px] bg-primary hover:bg-hover text-[18px] font-bold rounded-[50px]">Get Started</button>
      </div>
    </section>
  );
};

export default BoostSection;
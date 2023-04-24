import illustration from '../assets/illustration-working.svg'

const HeroSection = () => {
  return (
    <section className='px-[24px] overflow-x-hidden mb-[150px] lg:px-0 lg:mt-[75px]'>
      <div className='flex flex-col gap-[50px] lg:w-[75%] lg:mx-auto lg:flex-row-reverse lg:gap-[80px]'>
        <div className='lg:box-border lg:w-[40%]'>
          <img src={illustration} alt="Ilustracion de persona trabajando en una laptop" className='min-w-[500px] lg:min-w-[860px] md:mx-auto' />
        </div>
        <div className='flex flex-col gap-[30px] items-center lg:w-[60%] lg:items-start lg:justify-center'>
          <h1 className='font-bold text-4xl text-center lg:text-7xl lg:text-start'>More than just shorter links</h1>
          <p className='text-center text-[18px] text-gray-400 lg:text-start lg:w-[80%] lg:text-[22px]'>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
          <button className='w-[200px] h-[55px] bg-primary hover:bg-hover text-[18px] font-bold text-white rounded-[50px] lg:text-[22px] lg:w-[220px] lg:h-[60px]'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
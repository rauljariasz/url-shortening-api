import illustration from '../assets/illustration-working.svg'

const HeroSection = () => {
  return (
    <div className='px-[24px] overflow-x-hidden mb-[150px]'>
      <div className='flex flex-col gap-[50px]'>
        <img src={illustration} alt="Ilustracion de persona trabajando en una laptop" className='min-w-[500px] w-[733px]' />
        <div className='flex flex-col gap-[30px] items-center'>
          <h1 className='font-bold text-4xl text-center'>More than just shorter links</h1>
          <p className='text-center text-[18px] text-gray-400'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className='w-[200px] h-[55px] bg-primary text-[18px] font-bold text-white rounded-[50px]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
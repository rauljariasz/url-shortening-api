const MobileMenu = ({menu, setMenu}) => {
  const hanndleClose = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-[100%] h-[100%] absolute top-0">
      <div 
        onClick={hanndleClose}
        className="bg-bgMobileMenu absolute top-0 w-[100%] h-[100%] z-0"
      >
      </div>
      <div className="bg-secondary mt-[92px] mx-auto w-[327px] py-[40px] px-[24px] rounded-[10px] text-white z-10 relative">
        <ul className="flex flex-col items-center gap-[34px] border-b-[1px] border-b-grayViolet pb-[34px]">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="flex flex-col gap-[25px]">
          <button className="mt-[30px]">Login</button>
          <button className="bg-primary h-[48px] rounded-[50px]">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
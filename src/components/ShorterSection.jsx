import { useEffect, useState, useRef } from "react";
import Shorter from "../services/Shorter";
import BrandIcon from "../assets/icon-brand-recognition.svg";
import DetailedIcon from "../assets/icon-detailed-records.svg";
import fullyIcon from "../assets/icon-fully-customizable.svg";

const ShorterSection = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(undefined);
  const inputUrl = useRef(null);

  /* Si ya existen links en el localStorage, los traigo y los guardo en el state para iterarlos o agregar un link nuevo..  */
  const fetchLinks = async () => {
    const link = JSON.parse(localStorage.getItem("links"))
    if (link) setLinks(link)
  }

  /* API Navigator clipboard Property */
  const copyToClipboard = (str, e) => {
    e.preventDefault()
    setTimeout(() => {
      e.target.textContent = "Copy"
      e.target.classList.remove('copied')
    }, 5000)
    e.target.classList.add('copied')
    e.target.textContent = "Copied!"
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject("The Clipboard API is not available.");
  };

  /* Codigo de errores de la API */
  const errors = {
    1: "No URL specified",
    2: "Invalid URL",
    3: "Rate limit reached. Wait a second and try again",
    4: "IP-Address has been blocked because of violating our terms of service",
    5: "shrtcode code (slug) already taken/in use",
    6: "Unknown error",
    7: "No code specified ('code' parameter is empty)",
    8: "Invalid code submitted (code not found/there is no such short-link)",
    9: "Missing required parameters",
    10: "Trying to shorten a disallowed Link. More information on disallowed links"
  }

  useEffect(() => {
    fetchLinks()
  }, []);

  const handdleSubmit = (e) => {
    e.preventDefault();
    Shorter(url)
    .then((res) => {
      if (!res.ok) {
        setError(errors[res.error_code])
        inputUrl.current.classList.add('inputError')
        inputUrl.current.focus()
      }
      const { result } = res;
      if (Object.prototype.hasOwnProperty.call(result,'original_link')) {
        setLinks([result, ...links])
        localStorage.setItem("links", JSON.stringify([result, ...links]))
        setError(undefined)
        inputUrl.current.classList.remove('inputError')
      }
    })
  }

  return (
    <section className="relative bg-shorterSection px-[24px] pb-[80px] lg:px-[0px]">
      {/* Shorten a link here */}
      <div className="w-full min-h-[160px] bg-bgShortenMobile translate-y-[-80px] bg-secondary bg-contain bg-no-repeat bg-right-top rounded-[10px] lg:w-[75%] lg:mx-[auto] lg:bg-bgShortenDesktop lg:bg-cover">
        <form className="w-full h-full p-[24px] flex flex-col gap-[15px] lg:flex-row lg:items-center lg:px-[60px] lg:py-[55px] relative">
          <input 
            type="text" 
            ref={inputUrl}
            placeholder="Shorten a link here" 
            className="w-full h-[48px] pl-[15px] outline-none rounded-[8px]"
            onChange={(e) => setUrl(e.target.value)}
          />
          {error && <p className="text-error italic text-[12px] lg:absolute lg:text-[16px] lg:bottom-[27px]">{error}</p>}
          <button
            className="w-full h-[48px] bg-primary rounded-[8px] text-white lg:w-[190px] hover:bg-hover"
            onClick={handdleSubmit}
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* Shortened Links */}
      <div className="mt-[20px] translate-y-[-80px] lg:w-[75%] lg:mx-auto">
        { links.length > 0 && links.map((link) => {
          return (
            <div key={link.code} className="mt-[20px] bg-white w-full h-full flex flex-col rounded-[10px] overflow-x-hidden lg:px-[10px] lg:py-[5px] lg:flex-row lg:justify-between">
              <a 
                className="overflow-x-hidden border-b-[1px] border-gray-300 p-[15px] lg:border-none"
                href={link.full_short_link} 
                target="_blank" 
                rel="noreferrer"
              >
                <p className="text-[16px]">{link.original_link}</p>
              </a>

              <div className="lg:flex lg:items-center">
                <a 
                  className="p-[15px] text-primary inline-block"
                  href={link.full_short_link} 
                  target="_blank" rel="noreferrer"
                >
                  {link.full_short_link}
                </a>
                <form className="px-[15px] pb-[15px] lg:pb-0">
                  <button onClick={() => copyToClipboard(link.full_short_link, event)} className="w-full h-[40px] bg-primary text-white rounded-[8px] transition-all hover:bg-hover lg:w-[103px] lg:h-[40px]">Copy</button>
                </form>
              </div>
            </div>
          )
        })}
      </div>

      {/* Section */}
      <div className="lg:w-[75%] lg:mx-auto">
        <h2 className="mb-[20px] text-darkViolet text-center text-[27px] font-bold lg:text-4xl lg:mb-[30px]">Advanced Statistics</h2>
        <p className="text-center text-[16px] text-gray-400 mb-[95px] lg:text-[18px] lg:max-w-[530px] lg:mx-auto lg:leading-9">Track how your links are performing across the web with our advanced statistics dashboard.</p>

        {/* Cards Container*/}
        <div className="relative px-[24px] flex flex-col gap-[90px] lg:px-0 before:block before:w-[8px] before:h-[750px] before:right-[50%] before:translate-x-[50%] before:absolute before:bg-primary md:before:hidden desktop:flex-row desktop:w-full desktop:gap-0 desktop:justify-between desktop:before:block desktop:before:h-[8px] desktop:before:w-[1000px] desktop:before:top-[50%] desktop:before:translate-y-[-50%]">
          {/* Card Brand Recognition */}
          <div className="bg-white relative pt-[70px] px-[20px] pb-[45px] rounded-[10px] md:w-[350px] md:self-start md:h-[270px] md:px-[35px]">
            <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center md:left-[25%]">
              <img src={BrandIcon} alt="" />
            </div>
            <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Brand Recognition</h3>
            <p className="text-[14px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[15px] md:leading-7">Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          {/* Card Detailed Records*/}
          <div className="bg-white relative pt-[70px] px-[20px] pb-[45px] rounded-[10px] md:w-[350px] md:self-center md:h-[270px] md:px-[35px] desktop:mt-[45px]">
            <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center md:left-[25%]">
              <img src={DetailedIcon} alt="" />
            </div>
            <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Detailed Records</h3>
            <p className="text-[14px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[15px] md:leading-7">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
          </div>

          {/* Card Fully Customizable */}
          <div className="bg-white relative pt-[70px] px-[15px] pb-[45px] rounded-[10px] md:w-[350px] md:self-end md:h-[270px] md:px-[35px] desktop:mt-[90px]">
            <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center ">
              <img src={fullyIcon} alt="" />
            </div>
            <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Fully Customizable</h3>
            <p className="text-[15px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[14px] md:leading-7">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShorterSection;
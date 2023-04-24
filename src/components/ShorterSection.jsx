import { useEffect, useState, useRef } from "react";
import Shorter from "../services/Shorter";

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
    <section className="relative bg-blue-300 px-[24px] lg:px-[0px]">
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
      <div className="bg-green-300 mt-[20px] translate-y-[-80px]">
        { links.length > 0 && links.map((link) => {
          return (
            <div key={link.id} className="w-full h-full p-[24px] flex flex-col gap-[15px]">
              <a href={link.full_short_link} target="_blank" rel="noreferrer">{link.original_link}</a>
              <a href={link.full_short_link} target="_blank" rel="noreferrer">{link.full_short_link}</a>
            </div>
          )
        })}
      </div>

      {/* Section */}
      <div>
        <button onClick={() => localStorage.clear()}>Clear</button>
      </div>
    </section>
  );
};

export default ShorterSection;
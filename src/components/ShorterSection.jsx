import { useEffect, useState } from "react";
import Shorter from "../services/Shorter";

const ShorterSection = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const link = JSON.parse(localStorage.getItem("links"))
    if (link) setLinks(link)
  }

  useEffect(() => {
    fetchLinks()
  }, []);

  const handdleSubmit = (e) => {
    e.preventDefault();
    Shorter(url)
      .then((res) => {
      const { result } = res;
      setLinks([result, ...links])
      localStorage.setItem("links", JSON.stringify([result, ...links]))
      })
  }

  return (
    <section className="relative h-[600px] bg-blue-300 px-[24px]">
      {/* Shorten a link here */}
      <div className="w-full min-h-[160px] bg-red-300 translate-y-[-80px]">
        <form className="w-full h-full p-[24px] flex flex-col gap-[15px]">
          <input 
            type="text" 
            placeholder="Shorten a link here" 
            className="w-full h-[48px] pl-[15px] outline-none rounded-[8px]"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="w-full h-[48px] bg-primary rounded-[8px] text-white"
            onClick={handdleSubmit}
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* Shortened Links */}
      <div className="bg-green-300 mt-[20px] min-h-[160px] translate-y-[-80px]">
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
        asd
      </div>
    </section>
  );
};

export default ShorterSection;
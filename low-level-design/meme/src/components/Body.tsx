import { useEffect, useState } from "react";

const Body = () => {
   const [memes, setMemes] = useState<any[]>([]);
   const fetchMemes = async () => {
      const response = await fetch("https://meme-api.com/gimme/50");
      const json = await response.json();
      setMemes((prev) => [...prev, ...json.memes]);
   };

   const handleScroll = () => {
      console.log("Scrolling");
      console.log(window.scrollY + window.innerHeight >= document.body.scrollHeight);
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
         fetchMemes();
      }
   };

   useEffect(() => {
      fetchMemes();

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
         {memes.map((meme) => (
            <div>
               <img style={{ border: "2px solid #dfdfdf" }} width="300" height="300" src={meme.url} />
            </div>
         ))}
      </div>
   );
};

export default Body;

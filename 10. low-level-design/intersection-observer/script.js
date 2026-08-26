const imageObserver = new IntersectionObserver((entries) => {
   entries.map((item) => {
      if (item.isIntersecting) {
         const image = item.target;
         image.src = image.dataset.src;
         image.classList.remove("shimmer");
         observer.unobserve(image);
      }
   });
}, {});

const fetchMemes = async () => {
   const response = await fetch("https://meme-api.com/gimme/30");
   const json = await response.json();
   const memesElement = document.querySelector("#memes");
   (json.memes || []).map((item) => {
      const img = document.createElement("img");
      img.src = "";
      img.dataset.src = item.url;
      img.classList.add("shimmer");
      img.style.width = "300px";
      img.style.height = "300px";
      img.style.objectFit = "contain";
      memesElement.appendChild(img);
      imageObserver.observe(img);
   });
   return json;
};

document.addEventListener("DOMContentLoaded", (ev) => {
   fetchMemes();
});

const observer = new IntersectionObserver((entries) => {
   entries.forEach((item) => {
      if (item.isIntersecting) {
         console.log(entries);
         fetchMemes();
      }
   });
}, {});

const scrollElement = document.getElementById("scroll");
observer.observe(scrollElement);

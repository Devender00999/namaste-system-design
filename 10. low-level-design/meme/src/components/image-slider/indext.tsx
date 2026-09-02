import { useEffect, useState } from "react";
import leftImage from "./left.png";
import rightImage from "./right.png";

const ImageSlider = () => {
   const images = [
      {
         id: 1,
         title: "Mountain Escape",
         category: "Nature",
         description: "A peaceful mountain landscape surrounded by a beautiful alpine lake.",
         image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 2,
         title: "Ocean Sunset",
         category: "Travel",
         description: "Warm sunset colors reflecting across the ocean waves.",
         image: "https://images.unsplash.com/photo-1532376413372-100a02226622?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 3,
         title: "Into the Forest",
         category: "Nature",
         description: "A misty green forest filled with tall trees and soft natural light.",
         image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 4,
         title: "Alpine Lake",
         category: "Adventure",
         description: "A crystal-clear mountain lake surrounded by dramatic peaks.",
         image: "https://images.unsplash.com/photo-1653420723975-2776b75d360b?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 5,
         title: "Desert Dunes",
         category: "Adventure",
         description: "Golden and blue desert dunes stretching toward the horizon.",
         image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 6,
         title: "City Lights",
         category: "Urban",
         description: "A modern city skyline glowing beneath the evening sky.",
         image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 7,
         title: "Green Valley",
         category: "Nature",
         description: "A vast green valley surrounded by mountains and clouds.",
         image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 8,
         title: "Forest Light",
         category: "Nature",
         description: "Sunlight breaking through a dense forest canopy.",
         image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 9,
         title: "Coastal Morning",
         category: "Travel",
         description: "A calm coastline with waves rolling onto a quiet beach.",
         image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
      },
      {
         id: 10,
         title: "Mountain Reflection",
         category: "Landscape",
         description: "Snow-covered mountains reflected perfectly in a quiet lake.",
         image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
   ];

   const [activeImage, setActiveImage] = useState(0);
   const handlePrevImage = () => {
      setActiveImage((prev) => (prev > 0 ? prev - 1 : 0));
   };

   const handleNextImage = () => {
      setActiveImage((prev) => (prev + 1) % images.length);
   };

   //  useEffect(() => {
   //     const intervalId = setInterval(() => {
   //        handleNextImage();
   //     }, 1000);

   //     return () => {
   //        clearInterval(intervalId);
   //     };
   //  }, []);
   return (
      <div className="flex items-center gap-10">
         <img onClick={handlePrevImage} className="h-10" src={leftImage}></img>
         <img className="w-100 h-70" src={images[activeImage].image} alt={images[activeImage].title} />
         <img onClick={handleNextImage} className="h-10" src={rightImage}></img>
      </div>
   );
};

export default ImageSlider;

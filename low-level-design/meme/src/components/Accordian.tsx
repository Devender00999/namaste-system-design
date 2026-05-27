import { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
   {
      title: "Accordian #1",
      body: "This is the first item’s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
   },
   {
      title: "Accordian #2",
      body: "This is the second item’s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
   },
   {
      title: "Accordian #3",
      body: "This is the third item’s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
   },
];
const Accordian = () => {
   const [openIndex, setOpenIndex] = useState(0);
   return (
      <div>
         {data.map((accordianData, index) => (
            <AccordianItem
               setIsOpen={() => {
                  if (index == openIndex) {
                     setOpenIndex(-1);
                  } else setOpenIndex(index);
               }}
               isOpen={index == openIndex}
               key={index}
               title={accordianData.title}
               body={accordianData.body}
            />
         ))}
      </div>
   );
};

export default Accordian;

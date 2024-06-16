import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/rodes.jpg";
import Img2 from "../../assets/places/Paphos.jpg";
import Img3 from "../../assets/places/laranca.jpg";
import Img4 from "../../assets/places/sharm.jpg";
import Img5 from "../../assets/places/batumi.jpg";
import Img6 from "../../assets/places/Dubai.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "רודוס",
    location: "יָוָן",
    description: " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ400",
    type: "אדם בחדר זוגי",
  },
  {
    img: Img2,
    title: "פאפוס",
    location: "קַפרִיסִין",
    description:
    " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ450",
    type: "אדם בחדר זוגי",
  },
  {
    img: Img3,
    title: "larnaca",
    location: "קַפרִיסִין",
    description:
    " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ450",
    type: "אדם בחדר זוגי",
  },
  {
    img: Img4,
    title: "שארם אל שייח",
    location: "מִצְרַיִם",
    description:
    " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ250",
    type: "אדם בחדר זוגי",
  },
  {
    img: Img5,
    title: "בטומי",
    location: "גיאורגיה",
    description:
    " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ550",
    type: "אדם בחדר זוגי",
  },
  {
    img: Img6,
    title: "דובאי",
    location: "איחוד האמירויות",
    description:
    " כולל טיסה ישירה,לינה וארוחות ",
    price: "החל מ550",
    type: "אדם בחדר זוגי",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div dir="rtl" className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-r-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
          המקומות הטובים ביותר לבקר בהם  
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

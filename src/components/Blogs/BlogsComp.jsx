import React from "react";
import BlogCard from "./BlogCard";
import Img4 from "../../assets/places/sharm.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img4,
    title: "החבילות הכי זולות לשארם א שייח",
    description:
      "מלונות טובים במחירים הזולים ביותר עם הכל כלול",
    author: "עודכן",
    date: "07,05,2024",
  },
   
];

const BlogsComp = () => {
  return (
    <>
      <div dir="rtl" className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-r-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            חבילות חג אלאדחא 
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12 md:mt-48 px-8">
      <div className="flex flex-col md:flex-row gap-y-5 gap-x-20 justify-between items-center md:items-start">
        <div className="bg-slate-200 p-1.5 rounded-lg max-w-fit">
          <StaticImage
            imgClassName="rounded"
            alt=""
            src="../images/portrait.jpg"
            layout="fixed"
            height={250}
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl mb-5">
            Hello,
            <br /> I am Anshul Kanwar
          </h1>
          <p>I am student pursuing Computer Science and I love to Code.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

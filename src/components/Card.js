import React from "react";

const Card = ({ imageSrc, altText, name, title, description }) => {
  return (
    <div className="relative p-6 flex flex-col rounded-3xl mx-4 h-[600px] bg-slate-100">
      <div className="flex-grow flex items-center justify-center min-h-[300px] rounded-3xl overflow-hidden  relative">
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover  h-full w-auto"
        />
      </div>

      <div className="flex flex-col justify-end p-4 text-center">
        <p className="text-xl text-gray-400 tracking-widest mb-2">{name}</p>
        <p className="text-2xl font-black text-black mb-2">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;

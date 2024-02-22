
import React from "react";

export default function ProjectItem({ img, title, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <img className="md:h-48 w-full object-cover" src={img} alt={title} />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue">{title}</h2>
        </div>
      </div>
    </a>
  );
} 

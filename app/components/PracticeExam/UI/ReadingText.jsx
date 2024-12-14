"use client";

import React from "react";
export default function ReadingText({ content, title }) {
  return (
    <div className=" h-full overflow-y-auto p-4 md:p-20 border-r border-gray-300 text-white bg-neutral-950 scrollbar-wider">
      <div className="mt-10 mb-20">
        <h2 className="text-4xl font-bold mb-4 font-caveat-brush">{title}</h2>
        <p className="text-xl outfit-textFont">{content}</p>
      </div>
    </div>
  );
}


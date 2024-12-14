"use client";

import React from "react";
export default function ReadingText({ content, title }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 md:px-20 border-r border-gray-300 text-white bg-neutral-950 scrollbar-wider">
        <div className="py-10">
          <h2 className="text-4xl font-bold mb-4 font-caveat-brush">{title}</h2>
          <p className="text-xl outfit-textFont">{content}</p>
        </div>
      </div>
    </div>
  );
}

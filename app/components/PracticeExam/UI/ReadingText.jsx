"use client";

import React from "react";

export default function ReadingText({ content, title }) {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full sm:h-full overflow-y-scroll p-4 md:p-20 border-r border-gray-300 text-white bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-xl">{content}</p>
    </div>
  );
}

"use client";

import React from "react";

export default function ReadingText({ content, title }) {
  return (
    <div className="h-full overflow-y-auto  p-4 md:p-20 border-r border-gray-300 text-white bg-neutral-950">
      <div className="mx-5 mt-20 mb-20
      ">
        <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
        <p className="text-xl">{content}</p>
      </div>
    </div>
  );
}

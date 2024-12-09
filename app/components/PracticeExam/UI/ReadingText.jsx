"use client";

import React from "react";

export default function ReadingText({ content, title }) {
  return (
    <div className="w-1/2 overflow-y-scroll p-20 border-r border-gray-300 text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-xl ">{content}</p>
    </div>
  );
}
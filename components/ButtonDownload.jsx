"use client";

import React from "react";

const ButtonDownload = () => {
  return (
    <a
      href="/Hugo-CV.pdf"
      alt="alt text"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-sm w-fit p-2 bg-zinc-700 hover:bg-zinc-400"
    >
      Download CV
    </a>
  );
};

export default ButtonDownload;

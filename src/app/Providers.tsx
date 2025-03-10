"use client";

import { useState } from "react";
import Context from "./Context";

const modules = [
  {
    id: "1",
    title: "Módulo 1",
    videos: [
      { id: "018fe959-bdb6-76cb-8448-fd138b0a2986", title: "Vídeo 1" },
      { id: "01948f7c-8700-7062-89af-6b5b77adf55b", title: "Vídeo 2" },
    ],
  },
  {
    id: "2",
    title: "Módulo 2",
    videos: [
      { id: "018eb16a-cdfb-72af-90bd-eab23f0a46ea", title: "Vídeo 3" },
      { id: "018ec301-5456-7264-b904-e5de893f07da", title: "Vídeo 4" },
    ],
  },
];

const Providers = ({ children }: any) => {
  const [currentChoosedVideo, setCurrentChoosedVideo] = useState("");
  return (
    <Context.Provider
      value={{ currentChoosedVideo, modules, setCurrentChoosedVideo }}
    >
      {children}
    </Context.Provider>
  );
};

export default Providers;

"use client";

import { createContext } from "react";

interface ContextValue {
  modules: {
    id: string;
    title: string;
    videos: { title: string; id: string }[];
  }[];
  currentChoosedVideo: string;
  setCurrentChoosedVideo: (id: string) => void;
}

const Context = createContext<ContextValue>({} as ContextValue);

export default Context;

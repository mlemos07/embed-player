"use client";

import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import Pip from "./components/Pip";

declare global {
  interface Window {
    Spalla: any;
  }
}

const Page = ({ params }: { params: any }) => {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const loadedPage = useRef(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const [moduleId, videoId] = params.classRoom;
  const [currentChoosedVideo, setCurrentChoosedVideo] = useState(videoId);
  console.log("currentChoosedVideo", currentChoosedVideo);
  const { modules } = useContext(Context);
  const currentModule = modules.find(
    (currentModule) => currentModule.id === moduleId
  ) as any;

  const chooseOtherVideo = (newVideoId: string) => {
    setCurrentChoosedVideo(newVideoId);
    window.Spalla.config = {
      element: "#spalla-player-teste",
      stream: newVideoId,
      pip: true,
    };
    window.Spalla.reloadSpallaConfig();
  };

  useEffect(() => {
    window.Spalla.config = {
      element: "#spalla-player-teste",
      stream: currentChoosedVideo,
      pip: true,
    };
    if (window.Spalla && window.Spalla.reloadSpallaConfig) {
      window.Spalla.reloadSpallaConfig();
    }
  }, [currentChoosedVideo]);

  return (
    <>
      <div style={{ padding: "24px" }}>
        <Link href="/">
          <button
            style={{ cursor: "pointer", height: "36px", padding: "0px 8px" }}
          >
            Escolher um vídeo de outro módulo
          </button>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "12px", padding: "24px" }}>
        <div
          ref={playerContainerRef}
          style={{
            border: "none",
            borderRadius: "8px",
            position: "relative",
            height: "424px",
            width: "100%",
            flex: 1.8,
          }}
        >
          <div
            id="spalla-player-teste"
            style={{
              borderRadius: "8px",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "12px" }}>{currentModule.title}</p>
          {currentModule.videos.map((currentVideo: any) => (
            <div
              key={currentVideo.id}
              onClick={() => chooseOtherVideo(currentVideo.id)}
              style={{
                alignItems: "center",
                backgroundColor:
                  currentVideo.id === currentChoosedVideo
                    ? "#d1b3b3"
                    : "transparent",
                cursor: "pointer",
                display: "flex",
                padding: "8px",
              }}
            >
              {currentVideo.id}
            </div>
          ))}
        </div>
      </div>
      <Pip />
    </>
  );
};

export default Page;

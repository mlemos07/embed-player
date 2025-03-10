"use client";

import { useContext, useEffect } from "react";
import Context from "./Context";
import Link from "next/link";

const Home = () => {
  const { modules } = useContext(Context);
  return (
    <>
      <div style={{ height: "70px", padding: "24px" }}>
        <p>Escolha um vídeo</p>
      </div>
      <div style={{ padding: "24px" }}>
        {modules.map((module) => (
          <div
            key={module.id}
            style={{
              marginBottom: "24px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>{module.title}</h2>
            {module.videos && module.videos.length > 0 ? (
              <ul style={{ cursor: "pointer", paddingLeft: "20px" }}>
                {module.videos.map((video) => (
                  <Link key={video.id} href={`/${module.id}/${video.id}`}>
                    <li style={{ marginBottom: "8px" }}>
                      <strong>{video.title}</strong> (ID: {video.id})
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <p>Sem vídeos disponíveis</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

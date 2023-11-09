// Player.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MusicPlayer from "../components/MusicPlayer";

function Player() {
  const router = useRouter();
  const { musicId } = router.query;
  const [musicData, setMusicData] = useState(null);

  useEffect(() => {
    if (musicId) {
      // Use your API endpoint to fetch music details based on musicId
      const apiUrl = `YOUR_API_URL/${musicId}`; // Replace with your actual API endpoint
      axios
        .get(apiUrl)
        .then((response) => {
          setMusicData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching music details:", error);
        });
    }
  }, [musicId]);

  return (
    <div>
      {musicData ? (
        <>
          <h1>{musicData.title}</h1>
          <p>{musicData.artist}</p>
          {/* Add your music player component here, e.g., an audio element */}
          <MusicPlayer musicUrl={musicData.url} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Player;

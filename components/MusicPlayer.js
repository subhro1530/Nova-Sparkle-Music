import React from "react";

function MusicPlayer({ currentTrack }) {
  return (
    <div>
      <h1>Music Player</h1>
      {currentTrack ? (
        <>
          <h2>
            {currentTrack.title} by {currentTrack.artist}
          </h2>
          <p>Album: {currentTrack.album}</p>
          {currentTrack.preview !== null ? (
            <audio controls>
              <source src={currentTrack.preview} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p>No audio preview available.</p>
          )}
        </>
      ) : (
        <p>No track selected.</p>
      )}
    </div>
  );
}

export default MusicPlayer;

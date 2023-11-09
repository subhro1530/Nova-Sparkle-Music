import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicPlayer from "./MusicPlayer";
import styles from "../styles/MusicSearch.module.css";

function MusicSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);

      const apiUrl = `https://itunes.apple.com/search?term=${searchQuery}&media=music&entity=song`;

      axios
        .get(apiUrl)
        .then((response) => {
          setSearchResults(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data from iTunes API:", error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  const handleSelectTrack = (track) => {
    setSelectedTrack({
      title: track.trackName,
      artist: track.artistName,
      album: track.collectionName,
      preview: track.previewUrl || null,
      image: track.artworkUrl100, // Use a suitable size based on your preference
    });
  };

  return (
    <div className={styles.musicSearchContainer}>
      <form
        className={styles.searchForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search for a music..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.searchResults}>
          {searchResults.map((track) => (
            <div
              key={track.trackId}
              className={styles.musics}
              onClick={() => handleSelectTrack(track)}
            >
              <div className={styles.title}>
                {track.trackName} by {track.artistName}
              </div>
            </div>
          ))}
        </div>
      )}
      <MusicPlayer currentTrack={selectedTrack} />
    </div>
  );
}

export default MusicSearch;

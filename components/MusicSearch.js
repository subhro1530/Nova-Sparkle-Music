import React, { useState, useEffect } from "react";
// import axios from "axios";
import styles from "../styles/MusicSearch.module.css"; // Import your custom styles

function MusicSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);

      const apiKey = "AIzaSyBBP9Bj-3Fb8EImo1A7PwvBjdD3qFQvY4Q";
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&key=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const videoData = response.data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
          }));

          setSearchResults(videoData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data from YouTube API:", error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger the API request when the user submits the form
    // You can do this by setting the searchQuery
  };

  return (
    <div
      className={styles.musicSearchContainer}
    >
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a music..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.searchResults}>
          {searchResults.map((result) => (
            <li key={result.id}>
              <a
                href={`https://www.youtube.com/watch?v=${result.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MusicSearch;

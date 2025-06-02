import React, { useEffect, useState } from "react";
import axios from "axios";

const TrailerPlayer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/home/video/${movieId}`)
      .then((res) => {
        const trailer = res.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching trailer:", err);
        setTrailerKey(null);
      });
  }, [movieId]);

  if (!trailerKey)
    return (
      <p className="text-white text-center mt-6 text-lg">
        No trailer available.
      </p>
    );

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default TrailerPlayer;

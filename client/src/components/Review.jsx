import React, { useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Alice", rating: 4, comment: "Loved the movie!" },
    { id: 2, name: "Bob", rating: 5, comment: "Amazing visual effects." },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleStarClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment, rating } = formData;

    if (!name.trim() || !comment.trim() || rating < 1) {
      alert("Please fill out all fields and select a rating.");
      return;
    }

    const newReview = {
      id: Date.now(),
      ...formData,
      rating: Number(rating),
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  const renderStars = (rating, clickable = false) => {
    return [...Array(5)].map((_, i) => {
      const starIndex = i + 1;
      return (
        <span
          key={i}
          style={{
            cursor: clickable ? "pointer" : "default",
            color: starIndex <= rating ? "#facc15" : "#444", // yellow or dark gray
            fontSize: "24px",
            marginRight: 4,
            userSelect: "none",
          }}
          onClick={() => clickable && handleStarClick(starIndex)}
          aria-label={`${starIndex} Star`}
          role="img"
        >
          ★
        </span>
      );
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black rounded-lg mt-10 shadow-lg text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          autoComplete="off"
        />

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Your rating:</label>
          {renderStars(formData.rating, true)}
        </div>

        <textarea
          name="comment"
          placeholder="Write your review"
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded w-full transition"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div>
        {reviews.length === 0 ? (
          <p className="text-gray-400 text-center">No reviews yet. Be the first!</p>
        ) : (
          reviews.map(({ id, name, rating, comment }) => (
            <div key={id} className="border-b border-gray-700 py-4 last:border-none">
              <div className="flex items-center mb-1">
                <strong className="mr-3">{name}</strong>
                <div>{renderStars(rating)}</div>
              </div>
              <p className="text-gray-300">{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;

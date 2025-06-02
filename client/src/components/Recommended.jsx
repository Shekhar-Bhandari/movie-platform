import { useRef } from "react";
import rightArrow from "../images/icons/arrow-right.svg";
import leftArrow from "../images/icons/arrow-left.svg";

function RecommendedMovies({ recommendationArray }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-20 mb-10 px-12 pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-neutral-200 font-semibold">Recommended for you</h2>

        <div className="flex gap-2">
          {/* Left Scroll Button */}
          <button
            className="w-11 h-11 flex items-center justify-center bg-stone-900 text-white rounded-full shadow hover:bg-gray-700"
            onClick={() => scroll(-1)}
          >
            <img src={leftArrow} alt="Left Arrow" className="w-6 h-6" />
          </button>

          {/* Right Scroll Button */}
          <button
            className="w-11 h-11 flex items-center justify-center bg-stone-900 text-white rounded-full shadow hover:bg-gray-700"
            onClick={() => scroll(1)}
          >
            <img src={rightArrow} alt="Right Arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Recommended section */}
      <div
        ref={scrollRef}
        className="mt-6 flex overflow-x-auto gap-8 px-2 scrollbar-hide scroll-smooth"
      >
        {recommendationArray}
      </div>
    </section>
  );
}

export default RecommendedMovies;

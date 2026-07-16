import React, { useState } from "react";
import PostCard from "./PostCard";
import { cardsData } from "../data/cardsData";
import { v4 as uuidv4 } from "uuid";

function LastestPosts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Productivity", "Design"];

  const filteredPosts =
    activeCategory === "All"
      ? cardsData
      : cardsData.filter((item) => item.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Filter */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-[#F3F4F6] rounded-xl p-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm transition ${
                activeCategory === category
                  ? "bg-white shadow-md text-black"
                  : "text-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((item) => (
          <PostCard key={uuidv4()} card={item} />
        ))}
      </div>
    </section>
  );
}

export default LastestPosts;

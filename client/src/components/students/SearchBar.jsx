import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate("/course-list/" + input);
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <form
        onSubmit={onSearchHandler}
        className="max-w-xl w-full md:h-14 h-12 flex px-2 bg-white border border-gray-300 shadow-md rounded-full items-center overflow-hidden"
      >
        {/* Search Icon */}
        <div className="px-">
          <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
        </div>

        {/* Input Field */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Course Here..."
          className="w-full h-full px-3 text-gray-700 placeholder-gray-400 outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

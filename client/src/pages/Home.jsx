import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import QuoteCard from "../components/QuoteCard";
import FilterBar from "../components/FilterBar";

import {
  getQuotes,
  toggleFavourite,
} from "../services/quoteService";

function Home() {
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [search, setSearch] = useState("");

  const [showFavourites, setShowFavourites] =
    useState(false);

  const [sortBy, setSortBy] =
    useState("newest");

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const res = await getQuotes();
      setQuotes(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load quotes!");
    }
  };

  const handleToggleFavourite = async (
    id,
    favourite
  ) => {
    try {
      await toggleFavourite(id, favourite);

      setQuotes(
        quotes.map((quote) =>
          quote._id === id
            ? {
                ...quote,
                favourite,
              }
            : quote
        )
      );

      if (favourite) {
        toast.success("Added to favourites ❤️");
      } else {
        toast.info("Removed from favourites 🤍");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  let filteredQuotes = quotes.filter((quote) => {
    const categoryMatch =
      selectedCategory === "All" ||
      quote.category === selectedCategory;

    const searchMatch =
      quote.text
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      quote.author
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Favourite filter
  if (showFavourites) {
    filteredQuotes = filteredQuotes.filter(
      (quote) => quote.favourite
    );
  }

  // Sort
  switch (sortBy) {
    case "newest":
      filteredQuotes.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );
      break;

    case "oldest":
      filteredQuotes.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );
      break;

    case "az":
      filteredQuotes.sort((a, b) =>
        a.text.localeCompare(b.text)
      );
      break;

    case "za":
      filteredQuotes.sort((a, b) =>
        b.text.localeCompare(a.text)
      );
      break;

    default:
      break;
  }

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-purple-100
      p-8"
    >
      {/* bubbles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-[120px]"></div>

      <div className="absolute top-40 right-0 w-[350px] h-[350px] bg-purple-300 opacity-20 rounded-full blur-[120px]"></div>

      {/* Navbar */}
      <div className="relative z-10 bg-white rounded-[30px] shadow-xl p-6 mb-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

         {/* Logo */}
<h1
  onClick={() => {
    setSelectedCategory("All");
    setSearch("");
    setShowFavourites(false);
    setSortBy("newest");
    fetchQuotes();
  }}
  className="
    text-5xl
    font-bold
    text-blue-600
    cursor-pointer
    select-none
    hover:scale-105
    transition
  "
>
  QuoteBoard
</h1>

          {/* Search */}
          <div className="w-full max-w-md">
            <div className="flex overflow-hidden rounded-full border shadow bg-white">

              <input
                type="text"
                placeholder="Search quotes..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                flex-1
                px-5
                py-3
                outline-none"
              />

              <button
                className="
                px-6
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white"
              >
                🔍
              </button>

            </div>
          </div>

          {/* Admin Button */}
          <button
            onClick={() => navigate("/admin")}
            className="
            px-8 py-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            shadow-lg"
          >
            Admin Panel
          </button>

        </div>
      </div>

      {/* Category Filter */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setShowFavourites={setShowFavourites}
      />

      {/* Extra filters */}
      <div className="flex flex-wrap items-center gap-5 mt-8">

        <button
          onClick={() => {
            setSelectedCategory("All");
            setShowFavourites(
              !showFavourites
            );
          }}
          className={`
          px-6 py-3
          rounded-full
          shadow-lg
          font-medium
          transition

          ${
            showFavourites
              ? "bg-pink-500 text-white"
              : "bg-white"
          }
          `}
        >
          ❤️ Favourites
        </button>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="
          px-6 py-3
          rounded-full
          bg-white
          shadow-lg
          outline-none"
        >
          <option value="newest">
            Newest First
          </option>

          <option value="oldest">
            Oldest First
          </option>

          <option value="az">
            A-Z
          </option>

          <option value="za">
            Z-A
          </option>
        </select>

      </div>

      {/* Quotes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote) => (
            <QuoteCard
              key={quote._id}
              quote={quote}
              onToggleFavourite={
                handleToggleFavourite
              }
            />
          ))
        ) : (
          <div className="col-span-full text-center text-2xl text-gray-500">
            No quotes found.
          </div>
        )}

      </div>

    </div>
  );
}

export default Home;
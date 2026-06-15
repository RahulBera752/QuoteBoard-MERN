function QuoteCard({
  quote,
  onToggleFavourite,
}) {
  return (
    <div
      className="
      relative
      bg-white
      rounded-3xl
      p-8
      shadow-md
      hover:shadow-2xl
      duration-300
      hover:-translate-y-2"
    >
      {/* Heart */}
      <button
        onClick={() =>
          onToggleFavourite(
            quote._id,
            !quote.favourite
          )
        }
        className="absolute top-6 right-6 text-3xl"
      >
        {quote.favourite ? "❤️" : "🤍"}
      </button>

      <h2 className="text-4xl font-bold mb-8">
        "{quote.text}"
      </h2>

      <p className="text-xl mb-5">
        <span className="font-bold text-blue-600">
          Author:
        </span>{" "}
        {quote.author}
      </p>

      <span
        className="
        inline-block
        bg-blue-600
        text-white
        px-5
        py-2
        rounded-full"
      >
        {quote.category}
      </span>

      <p className="mt-8 text-gray-500">
        {new Date(
          quote.createdAt
        ).toLocaleDateString()}
      </p>
    </div>
  );
}

export default QuoteCard;
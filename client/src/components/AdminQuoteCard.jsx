function AdminQuoteCard({
  quote,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-3xl font-bold mb-4">
        "{quote.text}"
      </h2>

      <p>
        <b>Author:</b> {quote.author}
      </p>

      <p>
        <b>Category:</b> {quote.category}
      </p>

      <p>
        <b>Date:</b>{" "}
        {new Date(quote.createdAt).toLocaleDateString()}
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => onEdit(quote)}
          className="bg-yellow-500 text-white px-5 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(quote._id)}
          className="bg-red-500 text-white px-5 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AdminQuoteCard;
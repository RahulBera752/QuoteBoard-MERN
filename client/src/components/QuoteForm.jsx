import { useState, useEffect } from "react";

function QuoteForm({
  onSubmit,
  editingQuote,
}) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] =
    useState("Motivation");

  useEffect(() => {
    if (editingQuote) {
      setText(editingQuote.text);
      setAuthor(editingQuote.author);
      setCategory(editingQuote.category);
    }
  }, [editingQuote]);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      text,
      author,
      category,
    });

    setText("");
    setAuthor("");
    setCategory("Motivation");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-8 rounded-xl shadow"
    >

      <textarea
        placeholder="Enter quote..."
        className="border p-4 w-full mb-4"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Author"
        className="border p-4 w-full mb-4"
        value={author}
        onChange={(e) =>
          setAuthor(e.target.value)
        }
        required
      />

      <select
        className="border p-4 w-full mb-4"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>Motivation</option>
        <option>Life</option>
        <option>Humor</option>
        <option>Success</option>
        <option>Other</option>
      </select>

      <button className="bg-blue-600 text-white px-8 py-3 rounded">
        {editingQuote ? "Update Quote" : "Add Quote"}
      </button>

    </form>
  );
}

export default QuoteForm;
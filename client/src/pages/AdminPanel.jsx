import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import QuoteForm from "../components/QuoteForm";
import AdminQuoteCard from "../components/AdminQuoteCard";

import {
  getQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../services/quoteService";

function AdminPanel() {
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState([]);
  const [editingQuote, setEditingQuote] = useState(null);

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

  const handleSubmit = async (data) => {
    try {
      if (editingQuote) {
        await updateQuote(editingQuote._id, data);

        toast.success("Quote updated successfully!");

        setEditingQuote(null);
      } else {
        await createQuote(data);

        toast.success("Quote added successfully!");
      }

      fetchQuotes();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuote(id);

      toast.success("Quote deleted successfully!");

      fetchQuotes();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

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
      {/* Bubble Background */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-300 opacity-20 blur-[120px]"></div>

      <div className="absolute top-20 right-0 w-[350px] h-[350px] rounded-full bg-purple-300 opacity-20 blur-[120px]"></div>

      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] rounded-full bg-cyan-300 opacity-20 blur-[100px]"></div>

      {/* Header */}
      <div
        className="
        relative
        bg-white/70
        backdrop-blur-xl
        rounded-[35px]
        shadow-2xl
        border
        border-white/40
        px-10
        py-8
        mb-10"
      >
        <div className="flex items-center justify-between">
          {/* Back Arrow */}
          <button
            onClick={() => navigate("/")}
            className="
            w-14
            h-14
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            text-3xl
            shadow-lg
            hover:scale-110
            duration-300"
          >
            ←
          </button>

          {/* Logo */}
          <h1 className="text-6xl font-extrabold text-blue-600">
            QuoteBoard
          </h1>

          <div className="w-14"></div>
        </div>
      </div>

      {/* Form */}
      <div
        className="
        relative
        bg-white/70
        backdrop-blur-xl
        rounded-[35px]
        shadow-2xl
        border
        border-white/40
        p-8
        mb-10"
      >
        <QuoteForm
          onSubmit={handleSubmit}
          editingQuote={editingQuote}
        />
      </div>

      {/* Quotes */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote) => (
          <AdminQuoteCard
            key={quote._id}
            quote={quote}
            onEdit={setEditingQuote}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
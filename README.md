# 🧑‍💻 Intern Evaluation Task — Web Dev (React + MERN Stack)

> **Role:** Web Development Intern  
> **Stack:** MongoDB · Express.js · React · Node.js  
> **Difficulty:** Beginner  
> **Time Estimate:** 2–3 days  

---

## 📌 Problem Statement

### QuoteBoard — A Personal Quote Collection App

Build a **full-stack web application** where users can add, view, edit, and delete their favourite quotes. The app should demonstrate your understanding of building a basic REST API, connecting it to a database, and consuming it from a React frontend.

No authentication is required — think of this as a single shared board for now.

---

## 🎯 Core Features (Required)

### 1. View Quotes
- Display all saved quotes on the home page
- Each quote card should show:
  - The quote text
  - The author name
  - A category/tag (e.g. `Motivation`, `Life`, `Humor`)
  - The date it was added

### 2. Add a Quote
- A form to submit a new quote with:
  - `Quote text` (required)
  - `Author` (required)
  - `Category` — chosen from a fixed dropdown list: `Motivation`, `Life`, `Humor`, `Success`, `Other`
- Show a success message after the quote is added
- The new quote should appear in the list without a full page reload

### 3. Edit a Quote
- Each quote card should have an **Edit** button
- Clicking it opens the same form pre-filled with the existing quote's details
- On save, the updated quote should reflect immediately in the UI

### 4. Delete a Quote
- Each quote card should have a **Delete** button
- Show a simple confirmation prompt before deleting
- Remove the quote from the UI after successful deletion

### 5. Filter by Category
- Show a row of category filter buttons at the top of the quote list
- Clicking a category shows only quotes from that category
- An **"All"** button resets the filter

---

## ⚙️ Technical Requirements

### Backend (Node.js + Express + MongoDB)
- Create a REST API with the following endpoints:

  | Method | Endpoint | Description |
  |---|---|---|
  | GET | `/api/quotes` | Fetch all quotes |
  | POST | `/api/quotes` | Add a new quote |
  | PUT | `/api/quotes/:id` | Update a quote |
  | DELETE | `/api/quotes/:id` | Delete a quote |

- Use **Mongoose** to define a `Quote` schema and interact with MongoDB
- Use **dotenv** to manage environment variables (e.g. `MONGO_URI`, `PORT`)
- Return proper HTTP status codes (`200`, `201`, `400`, `404`, `500`)

### Frontend (React)
- Use **functional components** and basic React Hooks (`useState`, `useEffect`)
- Fetch data from your backend using `fetch` or `axios`
- Keep your components organized — avoid writing everything in one file
- Show a simple **loading indicator** while quotes are being fetched
- Show a user-friendly **error message** if the API call fails

### General
- The app should work on both **mobile and desktop** screens (basic responsiveness)
- Write a `README.md` that includes:
  - How to run the backend and frontend locally
  - The `.env` variables needed
  - At least one screenshot of the working app

---

## 🌟 Bonus Features (Optional but appreciated)

| Bonus | Description |
|---|---|
| ⬜ Search | A search bar to filter quotes by keyword |
| ⬜ Favourite | Mark/unmark a quote as favourite and filter by favourites |
| ⬜ Sort | Sort quotes by newest first or oldest first |
| ⬜ Deployment | Deploy the app and share a live link |

---

## 📁 Expected Repository Structure

```
quoteboard/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # QuoteCard, QuoteForm, FilterBar, etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                  # Express backend
│   ├── models/
│   │   └── Quote.js
│   ├── routes/
│   │   └── quotes.js
│   └── server.js
├── .env.example
└── README.md
```

---

## 🔀 Development Workflow

Follow this Git workflow throughout the assignment — it is part of what we evaluate.

1. **Fork** this repository to your own GitHub account
2. **Create a new branch** from `main` before writing any code:
   ```bash
   git checkout -b feature/solution
   ```
   Use a meaningful branch name such as `feature/solution` or `feature/assignment-implementation`. Do **not** commit directly to `main`.
3. **Commit regularly** as you build — small, focused commits with clear messages are preferred over one large commit at the end. For example:
   - `feat: add Quote mongoose model`
   - `feat: implement GET and POST quote routes`
   - `fix: handle empty author field validation`
4. Once complete, **push your branch** and open a **Pull Request targeting `main`** in your forked repo

> ⚠️ **Do not push your `.env` file.** Include a `.env.example` with all required keys listed.

---

## 📤 Pull Request Requirements

Your Pull Request is your **final submission** — treat its description as part of the work. It must include:

- **Summary of implementation** — what you built and how it fits together
- **Assumptions made** — any decisions you made where the problem statement was open to interpretation
- **Design decisions and trade-offs** — e.g. why you structured components a certain way
- **Known limitations or future improvements** — what you would tackle next given more time
- **Screenshots** of the working app
- **Live URL** (if deployed)

Title your PR: `[Submission] QuoteBoard — <Your Name>`

---

## 💬 Communication & Clarifications

All questions must be raised through **GitHub Issues** — not email, not chat. This keeps a clear record and is part of how we assess your communication.

**When creating an Issue:**
- Create a **separate Issue per question** — don't bundle multiple questions into one
- Use a **clear, descriptive title** that summarises what you're asking. Examples:
  - ✅ `Clarification on expected API response format`
  - ✅ `Question about category validation rules`
  - ❌ `Help`
  - ❌ `Doubt`
  - ❌ `Question`
- In the body, include:
  - What you are trying to achieve
  - What you have understood so far
  - The specific question or concern

**Before opening an Issue**, re-read the problem statement carefully — many questions are already answered there.

---

## 🧪 Evaluation Criteria

Your submission will be evaluated across these areas:

| Area | Weight |
|---|---|
| Functionality — do all CRUD operations work correctly? | 30% |
| Code quality — readable, organized, and sensibly named | 20% |
| UI/UX — clean layout, loading state, basic responsiveness | 15% |
| Git usage — meaningful branch, commit history, and PR | 20% |
| Documentation — README clarity and PR description quality | 15% |

In addition, the following are considered holistically:
- Problem-solving approach evident from commit progression
- Quality of communication in Issues and PR discussions
- Clarity of assumptions and design decisions documented

---

## ✅ Submission Checklist

Before submitting, go through this checklist:

- [ ] All code is committed and pushed to your **feature branch** (not `main`)
- [ ] A **Pull Request to `main`** has been created with the correct title
- [ ] `README.md` includes setup instructions and `.env` variables
- [ ] `.env.example` is present; `.env` is **not** committed
- [ ] PR description covers: summary, assumptions, decisions, limitations, and screenshots
- [ ] Any questions were raised via **GitHub Issues** with clear titles and context

---

## 💡 Tips for Candidates

- Start with the backend — get your API working and test it with **Postman** or **Thunder Client** before touching the frontend
- Keep your React components small and focused — one job per component
- Write commit messages that describe *what changed and why*, not just *what you did*
- Don't over-engineer it; clean and working beats fancy and broken

---

*This task is intentionally scoped to be approachable. Focus on writing clean, working code and communicating clearly — that tells us more than anything else.*

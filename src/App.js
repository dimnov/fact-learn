import { useEffect, useState } from "react";
import "./style.css";
import supabase from "./supabase.js";
import Loader from "./components/Loader.js";
import Header from "./components/Header.js";
import NewFactForm from "./components/NewFactForm.js";
import CategoryFilter from "./components/CategoryFilter.js";
import FactList from "./components/FactList.js";

export const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');
  // let voteBy = 'votesMindblowing';

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from('facts').select('*');

      if (currentCategory !== 'all')
        query = query.eq('category', currentCategory);


      const { data: facts, error } = await query
        .order('votesInteresting', { ascending: false }).limit(100);

      if (!error) setFacts(facts);
      else alert('Failed to get the data.');
      setFacts(facts);
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}
      </main>
    </>
  );
}

export default App;
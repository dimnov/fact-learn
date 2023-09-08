import isValidUrl from "./isValidUrl.js";
import supabase from "../supabase.js";
import { useState } from "react";
import { CATEGORIES } from "../App.js";

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && isValidUrl(source) && category && textLength <= 200) {
      setIsUploading(true);
      const { data: newFact, error } = await supabase.from('facts').insert([{ text, source, category }]).select();

      setIsUploading(false);

      if (!error)
        setFacts(facts => [newFact[0], ...facts]);


      setText('');
      setSource('');
      setCategory('');

      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact...(only if it's interesting though)"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input value={source} type="text" placeholder="Source link..." onChange={e => setSource(e.target.value)} disabled={isUploading} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map(cat =>
          <option key={cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>
        )}
      </select>
      <button className="btn btn-large" disabled={isUploading}>Post</button>
    </form>
  );
}

export default NewFactForm;

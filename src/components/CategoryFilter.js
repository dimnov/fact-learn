import { CATEGORIES } from "../App.js";

function CategoryFilter({ setCurrentCategory }) {

  return (
    <aside>
      <ul className="category">
        <li key={'all'}><button onClick={
          () => setCurrentCategory('all')} className="btn btn-all-categories">All</button></li>
        {CATEGORIES.map(cat => (
          <li key={cat.name}>
            <button onClick={
              () => setCurrentCategory(cat.name)} className="btn btn-category" style={{ backgroundColor: cat.color }}>{cat.name}</button>
          </li>
        ))}
      </ul>
    </aside >
  );
}

export default CategoryFilter;

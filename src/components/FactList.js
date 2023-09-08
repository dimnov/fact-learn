import Fact from "./Fact.js";

function FactList({ facts, setFacts }) {

  if (facts.length === 0)
    return <p className="message">No facts for this category yet! Create the first one ✌️</p>

  return (
    <section>
      <ul className="fact">{
        facts.map(fact =>
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        )}
      </ul>
    </section>
  );
}

export default FactList;
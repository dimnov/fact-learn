function Header({ showForm, setShowForm }) {
  return <header className="header">
    <div className="logo">
      <img src="logo.png" alt="logo" />
      <h1>act Learn</h1>
    </div>
    <button className="btn btn-large btn-open" onClick={() => setShowForm(show => !show)}>
      {showForm ? 'Close' : 'Share a fact'}</button>
  </header>
}

export default Header;

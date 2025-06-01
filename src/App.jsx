import './App.css';

function App() {
  return (
    <div className="container">
      <h1>🌷 Para ti, mi amor 🌷</h1>
      <p>Estas flores nunca se marchitan, como mi amor por ti.</p>
      <div className="flowers">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="flower">🌺</span>
        ))}
      </div>
      <p className="footer">Te amo ❤️</p>
    </div>
  );
}

export default App;
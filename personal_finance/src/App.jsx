import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RetirementType from './components/RetirementType';
import Home from './components/Home';
import ETFBenefit from './components/ETFBenefit';
import TaxInfo from './components/TaxInfo';

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyFinanceApp</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/etf">ETF Benefit</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/retirement">Retirement Types</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tax">Tax Info</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etf" element={<ETFBenefit />} />
          <Route path="/retirement" element={<RetirementType />} />
          <Route path="/tax" element={<TaxInfo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


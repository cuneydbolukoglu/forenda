import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/app.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;
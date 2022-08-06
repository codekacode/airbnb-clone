import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

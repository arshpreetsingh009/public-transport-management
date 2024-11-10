import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BusList from "./components/BusList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/busses" element={<BusList />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

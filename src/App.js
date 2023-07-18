import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp"; // Import the SignUp component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp component */}
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;

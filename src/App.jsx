import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/About";
import ContactPage from "./pages/contact";
import FeaturesPage from "./pages/Feature";
import Footer from "./component/Footer";

// Dummy nested pages (you can replace later)


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard with nested routes */}
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

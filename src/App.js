import { BrowserRouter, Routes, Route } from "react-router-dom";

//By creating an index.js, I can reduce the amount of clutter on my screen and import directly from my pages file -J
// I don't need to specify the index.js file because react knows to look into my folders to look for index.js -J
import { Home, Contact, Login, Register, Reset } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

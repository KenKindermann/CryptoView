import DetailView from "./components/DetailView/DetailView";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailview/:id" element={<DetailView />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

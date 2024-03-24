import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";
import Content from "./components/Content";

function App() {
  return (
    <div className="font-inter bg-[#D7D7D7] h-[100vh]  flex items-center">
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes> */}
      <Content />
    </div>
  );
}

export default App;

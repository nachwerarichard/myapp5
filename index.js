import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Blogs from "./pages/blog";
import Contanct from "./pages/Contanct";
import NoPage from "./pages/NoPage";
import SignIn from  "./pages/SignIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import "./App.js";

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="Contanct" element={<Contanct />} />
          <Route path="*" element={<NoPage />} />
          <Route path ="signin" element={<SignIn/> } />
          <Route path ="NoPage" element ={<NoPage/>} />
          <Route path ="About" element ={<About/>} />
          <Route path ="SignUp" element ={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
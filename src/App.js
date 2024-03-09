import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import PdfGenerator from "./components/PDFGenerator";

function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path={`/book/:id`} element={<PdfGenerator />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

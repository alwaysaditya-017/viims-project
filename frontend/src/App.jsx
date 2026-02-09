import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorList from "./pages/vendorList";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendorList />} />
      </Routes>
    </BrowserRouter>
  );
}


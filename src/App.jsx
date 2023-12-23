import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import BookingsPage from "./pages/BookingsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingList from "./components/admin/BookingList";

function App() {
  return (
    <>
    <div className="bg-zinc-900">
      <Header />
      
      <Routes>
        <Route path="/">
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/admin/bookings" element={<BookingList />} />
        </Route>
      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default App;

import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import BookingsPage from './pages/BookingsPage';

function App() {
  
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
    </Routes>

    
  )
}

export default App
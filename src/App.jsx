import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import BookingsPage from './pages/BookingsPage';
import Layout from './Layout';


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Route>
      
    </Routes>

    
  )
}

export default App
import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';


function App() {
  
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>


//     <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Home</a></li>
//         <li><a>About</a></li>
//         <li>
//           <a>Locations</a>
//           <ul className="p-2">
//             <li><a>The Grand Lodge</a></li>
//             <li><a>The Wilkes Cabin</a></li>
//             <li><a>The Fairvale Motel</a></li>
//           </ul>
//         </li>
//         <li><a>dfsdf</a></li>
//         <li><a>dsfsdfd</a></li>
//         <li><a>sdfsdf</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">The Overlooked Hotels Logo</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Home</a></li>
//       <li><a>About</a></li>
//       <li>
//         <details>
//           <summary>Locations</summary>
//           <ul className="p-2">
//             <li><a>The Grand Lodge</a></li>
//             <li><a>The Wilkes Cabin</a></li>
//             <li><a>The Fairvale Motel</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Contact</a></li>
//       <li><a>Bookings</a></li>
 
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Sign In</a>
//   </div>
// </div>
      
    
  )
}

export default App
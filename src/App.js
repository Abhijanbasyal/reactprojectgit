import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import Login from './components/Login';
import Signup from './components/Signup'; // Import the Signup component
import { Profile } from "./components/pages/Profile";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="bg-slate-500 h-screen">
      <BrowserRouter>
        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

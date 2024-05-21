import { useState } from 'react';
import Register from './component/Regitster';
import Login from './component/Login';
import Navbar from './Navbar';
import Home from './component/Home';
import NewsBlog from './component/NewsBlog';
import AddBlog from './component/AddBlog';
import Blog from './component/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/NewsBlog" element={<NewsBlog />} />
        <Route path="/Blog" element={<Blog/>} />

        <Route path="/AddBlog" element={<AddBlog />} />

        <Route path="/register" element={<Register onLogin={Register} />} />
        <Route path="/login" element={<Login onLogin={login} />} />
      </Routes>
    </Router>
  );
}

export default App;

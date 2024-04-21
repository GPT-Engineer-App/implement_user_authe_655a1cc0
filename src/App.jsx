import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route exact path='/' element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;


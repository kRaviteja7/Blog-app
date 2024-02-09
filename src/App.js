import TopBar from "./components/topbar/TopBar"
import Register from "./pages/register/Register";
import Home from './pages/homepage/Home'
import Login from './pages/loginpage/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Single from './pages/single/Single'

function App() {
    const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/register" element={currentUser ? <Home /> : <Register />}/>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
      </Routes>
    </Router>
  );
}

export default App;

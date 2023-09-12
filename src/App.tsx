import { BrowserRouter as Router,Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';


function App() {
  const  token  = localStorage.getItem('innoscriptaToken')
  return (
       <Router>
          <ToastContainer />
        <AuthProvider>
            <Routes>
              <Route path='/' element={token?<Home />:<Login />} />
              <Route path='/register' element={token?<Home />:<Register />} />
              <Route path="/home" element={<PrivateRoute/>} />
            </Routes>
        </AuthProvider>
    </Router>
  );
}

function PrivateRoute() {
  const  token  = localStorage.getItem("innoscriptaToken")
  // if the user is authenticated (has a token in the localstorage) allow access to the route, otherwise, redirect to the login page
  return token ? <Home /> : <Navigate to="/" />
}

export default App;

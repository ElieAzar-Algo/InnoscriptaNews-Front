import { BrowserRouter as Router,Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import Preference from './pages/Preference';
import { ArticleProvider } from './context/ArticleContext';


function App() {
  const  token  = localStorage.getItem('innoscriptaToken')
  return (
    <div className="innoscripta">
       <Router>
          <ToastContainer />
        <AuthProvider>
        <ArticleProvider>
            <Routes>
              <Route path='/' element={token?<Home />:<Login />} />
              <Route path='/register' element={token?<Home />:<Register />} />
              <Route path="/home" element={<PrivateRoute component={Home} />} />
              <Route path="/preference" element={<PrivateRoute component={Preference} />} />
            </Routes>
        </ArticleProvider>
        </AuthProvider>
    </Router>

  </div>
  );
}

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

function PrivateRoute({ component: Component, ...rest }:PrivateRouteProps) {
  const token = localStorage.getItem("innoscriptaToken");

  // Render the specified component if the user is authenticated, otherwise, redirect to the login page
  return token ? <Component {...rest} /> : <Navigate to="/" />;
}

export default App;

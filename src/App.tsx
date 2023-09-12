import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './components/common/Form';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
  
       <Router>
          <ToastContainer />
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </AuthProvider>
    </Router>
  );
}

export default App;

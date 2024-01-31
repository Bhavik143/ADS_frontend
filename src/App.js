import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import ApplicationForm from './Components/ApplicationForm';
import Error from './Components/Error';
import Update from './Components/Update';
import View from './Components/View';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path= "/form" element={<ApplicationForm />}/>
              <Route path='/update/:id' element={<Update />} />
              <Route path='view' element={<View />} />
              <Route path='signup' element={<Signup />} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;

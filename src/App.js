import "./app.scss";
import Homepage from "./homepage/homepage";
import Login from "./login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

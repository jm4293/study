import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import BoardList from './pages/board/BoardList';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/board-list" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

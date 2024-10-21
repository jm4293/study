import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindPassword, SignIn, SignUp } from './pages/auth';
import BoardList from './pages/board/BoardList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/board-list" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

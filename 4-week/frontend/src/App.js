import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindPassword, SignIn, SignUp } from './pages/auth';
import { BoardList } from './pages/board';
import { BoardDetail } from './pages/board/BoardDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/board-list" element={<BoardList />} />
        <Route path="/board-detail" element={<BoardDetail />} />
        <Route path="/board-detail/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

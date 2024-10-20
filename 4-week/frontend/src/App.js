import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import BoardList from './pages/board/BoardList';
import SignUp from './pages/auth/SignUp';

function App() {
  // const onClickSignUpHandler = () => {
  //   axios
  //     .post("http://localhost:8080/api/auth/sign-up", {
  //       email: "jm4293_3@gmail.com",
  //       password: "1234",
  //       name: "후후_3",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.data);
  //     });
  // };
  //
  // const onClickSignInHandler = () => {
  //   axios
  //     .post("http://localhost:8080/api/auth/sign-in", {
  //       email: "jm4293_2@gmail.com",
  //       password: "1234",
  //     })
  //     .then((response) => {
  //       const token = response.headers["authorization"];
  //
  //       // axios
  //       //   .get("http://localhost:8080/api/board/board-list", {
  //       //     headers: {
  //       //       Authorization: token, // Bearer 토큰 포함
  //       //     },
  //       //   })
  //       //   .then((response) => {
  //       //     console.log(response);
  //       //   })
  //       //   .catch((error) => {
  //       //     alert(error.response.data.data);
  //       //   });
  //
  //       axios
  //         .post(
  //           "http://localhost:8080/api/board/board-create",
  //           {
  //             title: "내용_11",
  //             content: "본문_11",
  //           },
  //           {
  //             headers: {
  //               Authorization: token, // Bearer 토큰 포함
  //             },
  //           },
  //         )
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((error) => {
  //           alert(error.response.data.data);
  //         });
  //     });
  // };
  //
  // const onClickBoardListHandler = () => {
  //   axios
  //     .get("http://localhost:8080/api/board/board-list", {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.message);
  //     });
  // };
  //
  // const onClickBoardCreateHandler = () => {
  //   axios
  //     .post("http://localhost:8080/api/board/board-create", {
  //       title: "",
  //       content: "",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.data);
  //     });
  // };

  // return (
  //   <div className="App">
  //     <button onClick={onClickSignUpHandler}>회원가입</button>
  //     <button onClick={onClickSignInHandler}>로그인</button>
  //     <button onClick={onClickBoardListHandler}>게시판 리스트</button>
  //     <button onClick={onClickBoardCreateHandler}>게시판 생성</button>
  //   </div>
  // );

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

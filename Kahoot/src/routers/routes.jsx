import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import GamePinEntry from "../pages/GamePinDashBoard.jsx";
import StudentForm from "../pages/StudentForm.jsx";
import TeacherForm from "../pages/TeacherForm.jsx";
import QuestionForm from "../pages/QuizForm.jsx";
import Login from "../auth/Login.jsx";



const router = createBrowserRouter([
     {
          path: "/",
          element: <GamePinEntry/>
     },
     {
          path: '/Home',
          element: <Home/>,
     },
     {
          path: '/login',
          element: <Login/>,
     },
     {
          path: '/teacher',
          element: <TeacherForm/>,
     },
     {
          path: '/student',
          element: <StudentForm/>,
     },
     {
          path: '/question',
          element: <QuestionForm/>,
     },
     // {
     //      path: '/lobby/:pin',
     //      element: <GameLobby/>,
     // },
     // {
     //      path: '/play/:pin',
     //      element: <GamePlay/>,
     // },
]);

export default router;
import {RouterProvider, useNavigate} from 'react-router-dom';
import './App.css';
import router from './routers/routes.jsx';
import {ToastContainer} from "react-toastify";

export default function App() {

  return (
      <>
           <ToastContainer position="top-right" autoClose={3000}/>
           <RouterProvider router={router}/>
      </>
  );
}
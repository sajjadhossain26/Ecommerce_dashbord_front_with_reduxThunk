import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

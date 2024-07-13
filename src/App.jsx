import { useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import File from "./components/File";
import About from "./components/About";
import Footer from "./components/Footer";
import reducer from "./Reducer";
let initailValue = [];
function App() {
  const [tasks, dispatch] = useReducer(reducer, initailValue);

  return (
    <>
      <h5>My to do list</h5>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AddTask dispatch={dispatch} />
            </>
          }
        />
        <Route
          path="/file"
          element={
            <>
              <Header />
              <File tasks={tasks} dispatch={dispatch} />
            </>
          }
        />
        <Route
          path="/addtask"
          element={
            <>
              <Header />
              <AddTask dispatch={dispatch} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

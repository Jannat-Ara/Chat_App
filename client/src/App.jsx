import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/" element={<ChatPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
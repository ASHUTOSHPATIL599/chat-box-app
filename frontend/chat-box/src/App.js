import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import MainContainer from "./Components/MainContainer";
import Sidebar from "./Components/Sidebar";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import CreateGroups from "./Components/CreateGroups";
import Users_Groups from "./Components/Users";
import Groups from "./Components/Groups";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users_Groups />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

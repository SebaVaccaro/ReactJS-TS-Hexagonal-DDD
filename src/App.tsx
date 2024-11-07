import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./interface/pages/HomePage"
import { NavBar } from "./interface/components/application/NavBar"
import { RegisterPage } from "./interface/pages/RegisterPage"
import { LoginPage } from "./interface/pages/LoginPage"
import { UserPage } from "./interface/pages/UserPage"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

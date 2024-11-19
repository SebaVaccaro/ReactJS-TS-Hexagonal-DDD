import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./interface/pages/HomePage"
import { NavBar } from "./interface/components/application/NavBar"
import { RegisterPage } from "./interface/pages/RegisterPage"
import { LoginPage } from "./interface/pages/LoginPage"
import { UserPage } from "./interface/pages/UserPage"
import { ProfilePage } from "./interface/pages/ProfilePage"
import { CreatePublicationPage } from "./interface/pages/CreatePublicationPage"
import { PublicationPage } from "./interface/pages/PublicationPage"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/user/register" element={<RegisterPage/>}/>
        <Route path="/auth/login" element={<LoginPage/>}/>
        <Route path="/user/profile" element={<ProfilePage/>}/>
        <Route path="/user/:id" element={<UserPage/>}/>
        <Route path="/publication/create" element={<CreatePublicationPage/>}/>
        <Route path="/publication/:id" element={<PublicationPage/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

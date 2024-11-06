import { LoginUser } from "./interface/components/user/LoginUser"
import { RegisterUser } from "./interface/components/user/RegisterUser"
import { UserProfile } from "./interface/components/user/UserProfile"

function App() {
return(
  <>
    <RegisterUser/>

    <h4>login</h4>
    <LoginUser/>

    <UserProfile/>
  </>
)
}

export default App

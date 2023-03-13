import {Route, Routes} from "react-router-dom";
import {Profile, Register, SignIn, SignOut} from "./index";
import {NotFound} from "../index";

const Account = () => {
    return <Routes>
        <Route index element={<Profile/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="signOut" element={<SignOut/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
}

export default Account;
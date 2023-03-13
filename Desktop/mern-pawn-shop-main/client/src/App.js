import './App.css';
import {Route, Routes} from "react-router-dom";
import {Account, Home, NotFound} from "./components/pages";
import {UserContextProvider} from "./contexts";
import {Footer, Header} from "./components/common";

function App() {
    return <UserContextProvider>
        <Header/>
        <main id="content">
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/account/*" element={<Account/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
        <Footer/>
    </UserContextProvider>
}

export default App;

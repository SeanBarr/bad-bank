import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateAccount from './pages/CreateAccount';
import LogIn from './pages/LogIn';
import Home from "./pages/Home";
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import AllData from './pages/AllData';
import Footer from "./components/Footer";
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <HashRouter>
            <div className="min-vh-100 d-flex flex-column bg-white">
                    <Navbar />
                    <main className="d-flex flex-column flex-grow-1 container">
                        <Routes>
                                <Route path='/createaccount' element={<CreateAccount />} />
                                <Route path='/login' element={<LogIn />} />
                                <Route exact path='/' element={<Home />} />
                                <Route path='/deposit' element={<Deposit />} />
                                <Route path='/withdraw' element={<Withdraw />} />
                                <Route path='/alldata' element={<AllData />} />
                                <Route path='/*' element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
            </div>
        </HashRouter >
    );
}

export default App;
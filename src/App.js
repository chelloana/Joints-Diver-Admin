import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/stories"
                    element={
                        <Layout>
                            <Stories />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
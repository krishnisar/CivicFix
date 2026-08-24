import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import Issues from "./pages/Issues";
import CommunityHelp from "./pages/CommunityHelp";
import Dashboard from "./pages/Dashboard";


function App() {
    return (
        <HashRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/report"
                    element={<ReportIssue />}
                />

                <Route
                    path="/issues"
                    element={<Issues />}
                />

                <Route
                    path="/help"
                    element={<CommunityHelp />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Routes>

        </HashRouter>
    );
}

export default App;

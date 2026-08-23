import {
    BrowserRouter,
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
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Report Issue */}
                <Route
                    path="/report"
                    element={<ReportIssue />}
                />

                {/* Track Issues */}
                <Route
                    path="/issues"
                    element={<Issues />}
                />

                {/* Community Help */}
                <Route
                    path="/help"
                    element={<CommunityHelp />}
                />

                {/* Dashboard */}
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
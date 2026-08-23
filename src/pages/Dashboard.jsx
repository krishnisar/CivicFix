import { useEffect, useState } from "react";

function Dashboard() {

    const [issues, setIssues] = useState([]);
    const [helpPosts, setHelpPosts] = useState([]);
    const [weather, setWeather] = useState(null);


    useEffect(() => {

        // Get CivicFix issues from localStorage
        const savedIssues =
            JSON.parse(
                localStorage.getItem("civicfixIssues")
            ) || [];

        // Get community help posts from localStorage
        const savedHelpPosts =
            JSON.parse(
                localStorage.getItem("civicfixHelpPosts")
            ) || [];

        setIssues(savedIssues);
        setHelpPosts(savedHelpPosts);


        // API CALL
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current=temperature_2m,relative_humidity_2m,weather_code"
        )
            .then(response => response.json())
            .then(data => {

                setWeather(data.current);

            })
            .catch(error => {

                console.error(
                    "Weather API error:",
                    error
                );

            });

    }, []);


    // ISSUE STATISTICS

    const totalIssues =
        issues.length;

    const pendingIssues =
        issues.filter(
            issue => issue.status === "Pending"
        ).length;

    const inProgressIssues =
        issues.filter(
            issue => issue.status === "In Progress"
        ).length;

    const resolvedIssues =
        issues.filter(
            issue => issue.status === "Resolved"
        ).length;

    const highPriorityIssues =
        issues.filter(
            issue => issue.urgency === "High"
        ).length;


    return (

        <main>

            {/* DASHBOARD HEADER */}

            <section className="section">

                <div className="page-heading">

                    <p className="small-title">
                        CIVICFIX DASHBOARD
                    </p>

                    <h1>
                        Community Overview
                    </h1>

                    <p>
                        Monitor civic issues and community
                        support activity.
                    </p>

                </div>


                {/* STATISTICS */}

                <div className="stats-grid">


                    <div className="stat-card">

                        <h3>
                            Total Issues
                        </h3>

                        <strong>
                            {totalIssues}
                        </strong>

                    </div>


                    <div className="stat-card">

                        <h3>
                            Pending Issues
                        </h3>

                        <strong>
                            {pendingIssues}
                        </strong>

                    </div>


                    <div className="stat-card">

                        <h3>
                            In Progress
                        </h3>

                        <strong>
                            {inProgressIssues}
                        </strong>

                    </div>


                    <div className="stat-card">

                        <h3>
                            Resolved Issues
                        </h3>

                        <strong>
                            {resolvedIssues}
                        </strong>

                    </div>


                    <div className="stat-card">

                        <h3>
                            High-Priority Issues
                        </h3>

                        <strong>
                            {highPriorityIssues}
                        </strong>

                    </div>


                    <div className="stat-card">

                        <h3>
                            Total Help Posts
                        </h3>

                        <strong>
                            {helpPosts.length}
                        </strong>

                    </div>


                    {/* API CARD */}

                    <div className="stat-card">

                        <h3>
                            Mumbai Weather
                        </h3>

                        {weather ? (

                            <>
                                <strong>
                                    {weather.temperature_2m}°C
                                </strong>

                                <p>
                                    Humidity:{" "}
                                    {weather.relative_humidity_2m}%
                                </p>
                            </>

                        ) : (

                            <p>
                                Loading weather...
                            </p>

                        )}

                    </div>


                </div>

            </section>


            {/* STATUS SECTION */}

            <section className="section">

                <div className="section-heading">

                    <p className="small-title">
                        ISSUE STATUS
                    </p>

                    <h2>
                        Current Progress
                    </h2>

                </div>


                <div className="status-grid">


                    <div className="status-card">

                        <h3>
                            Pending
                        </h3>

                        <p>
                            {pendingIssues} issues
                        </p>

                    </div>


                    <div className="status-card">

                        <h3>
                            In Progress
                        </h3>

                        <p>
                            {inProgressIssues} issues
                        </p>

                    </div>


                    <div className="status-card">

                        <h3>
                            Resolved
                        </h3>

                        <p>
                            {resolvedIssues} issues
                        </p>

                    </div>


                </div>

            </section>


            {/* FOOTER */}

            <footer>

                <p>
                    © 2026 CivicFix — Smart Community Issue Reporting System
                </p>

            </footer>

        </main>

    );
}

export default Dashboard;
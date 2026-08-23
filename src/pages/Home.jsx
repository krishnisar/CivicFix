function Home() {
    return (
        <>

            {/* HERO SECTION */}

            <section className="hero">

                <div className="hero-content">

                    <p className="tagline">
                        SMART COMMUNITY • BETTER CITY
                    </p>

                    <h1>
                        Make Your Community <span>Better.</span>
                    </h1>

                    <p className="hero-description">
                        CivicFix allows citizens to report local civic
                        problems, track their progress and connect with
                        people who need or want to offer community support.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="/report"
                            className="btn primary-btn"
                        >
                            📝 Report an Issue
                        </a>

                        <a
                            href="/help"
                            className="btn secondary-btn"
                        >
                            🤝 Community Help
                        </a>

                    </div>

                </div>

            </section>


            {/* WHAT CIVICFIX DOES */}

            <section className="section">

                <div className="section-heading">

                    <p className="small-title">
                        WHAT CIVICFIX DOES
                    </p>

                    <h2>
                        One Platform. Two Ways to Help.
                    </h2>

                </div>


                <div className="feature-grid">


                    <div className="feature-card">

                        <div className="feature-icon">
                            🚧
                        </div>

                        <h3>
                            Civic Issue Reporting
                        </h3>

                        <p>
                            Report potholes, garbage overflow,
                            water leakage, broken street lights
                            and other public problems.
                        </p>

                        <a href="/report">
                            Report a problem →
                        </a>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🤝
                        </div>

                        <h3>
                            Community Support
                        </h3>

                        <p>
                            Request or offer support such as
                            books, food donations, volunteering
                            and elderly assistance.
                        </p>

                        <a href="/help">
                            View Help Board →
                        </a>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            📊
                        </div>

                        <h3>
                            Live Dashboard
                        </h3>

                        <p>
                            View total issues, pending complaints,
                            resolved problems and high-priority issues.
                        </p>

                        <a href="/dashboard">
                            View Dashboard →
                        </a>

                    </div>


                </div>

            </section>


            {/* HOW CIVICFIX WORKS */}

            <section className="section process-section">

                <div className="section-heading">

                    <p className="small-title">
                        SIMPLE PROCESS
                    </p>

                    <h2>
                        How CivicFix Works
                    </h2>

                </div>


                <div className="process-grid">


                    <div className="process-card">

                        <span>
                            01
                        </span>

                        <h3>
                            Report
                        </h3>

                        <p>
                            Citizen submits details about
                            the local issue.
                        </p>

                    </div>


                    <div className="process-card">

                        <span>
                            02
                        </span>

                        <h3>
                            Store
                        </h3>

                        <p>
                            JavaScript stores the record
                            inside an array and browser
                            localStorage.
                        </p>

                    </div>


                    <div className="process-card">

                        <span>
                            03
                        </span>

                        <h3>
                            Track
                        </h3>

                        <p>
                            The complaint starts with Pending
                            status and can be updated.
                        </p>

                    </div>


                    <div className="process-card">

                        <span>
                            04
                        </span>

                        <h3>
                            Improve
                        </h3>

                        <p>
                            Dashboard statistics provide
                            a quick overview of community issues.
                        </p>

                    </div>


                </div>

            </section>


            {/* SDG SECTION */}

            <section className="sdg-section">

                <div className="sdg-content">

                    <p className="small-title">
                        UNITED NATIONS SDGs
                    </p>

                    <h2>
                        SDG 11 — Sustainable Cities and Communities
                    </h2>

                    <p>
                        CivicFix primarily supports SDG 11 by
                        encouraging citizens to participate in
                        identifying and resolving community problems
                        such as sanitation, public roads, lighting
                        and public spaces.
                    </p>


                    <div className="supporting-sdgs">

                        <span>
                            SDG 3
                        </span>

                        <span>
                            SDG 6
                        </span>

                        <span>
                            SDG 10
                        </span>

                        <span>
                            SDG 12
                        </span>

                    </div>

                </div>

            </section>


            {/* FOOTER */}

            <footer>

                <p>
                    © 2026 CivicFix — Smart Community Issue Reporting System
                </p>

            </footer>

        </>
    );
}

export default Home;
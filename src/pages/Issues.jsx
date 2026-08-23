import { useEffect, useState } from "react";

function Issues() {
    const [issues, setIssues] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    useEffect(() => {
        const saved =
            JSON.parse(localStorage.getItem("civicfixIssues")) || [];

        setIssues(saved);
    }, []);

    function updateStatus(id, newStatus) {
        const updated = issues.map(issue =>
            issue.id === id
                ? { ...issue, status: newStatus }
                : issue
        );

        setIssues(updated);

        localStorage.setItem(
            "civicfixIssues",
            JSON.stringify(updated)
        );
    }

    function deleteIssue(id) {
        const updated = issues.filter(
            issue => issue.id !== id
        );

        setIssues(updated);

        localStorage.setItem(
            "civicfixIssues",
            JSON.stringify(updated)
        );
    }

    const filteredIssues = issues.filter(issue => {
        const matchesSearch =
            issue.area.toLowerCase().includes(search.toLowerCase()) ||
            issue.category.toLowerCase().includes(search.toLowerCase()) ||
            issue.description.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            status === "All" || issue.status === status;

        return matchesSearch && matchesStatus;
    });

    return (
        <main>

            <section className="section">

                <div className="page-heading">

                    <p className="small-title">
                        ISSUE TRACKING
                    </p>

                    <h1>
                        Reported Civic Issues
                    </h1>

                    <p>
                        View and manage reported community issues.
                    </p>

                </div>

                <div className="filters">

                    <input
                        type="text"
                        placeholder="Search issues..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />

                    <select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>

                </div>

                <div className="issues-grid">

                    {filteredIssues.length === 0 ? (

                        <p>
                            No issues found.
                        </p>

                    ) : (

                        filteredIssues.map(issue => (

                            <div
                                className="issue-card"
                                key={issue.id}
                            >

                                <h3>
                                    {issue.category}
                                </h3>

                                <p>
                                    <strong>Area:</strong>{" "}
                                    {issue.area}
                                </p>

                                <p>
                                    {issue.description}
                                </p>

                                <p>
                                    <strong>Urgency:</strong>{" "}
                                    {issue.urgency}
                                </p>

                                <p>
                                    <strong>Date:</strong>{" "}
                                    {issue.date}
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    {issue.status}
                                </p>

                                <select
                                    value={issue.status}
                                    onChange={e =>
                                        updateStatus(
                                            issue.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option>
                                        Pending
                                    </option>

                                    <option>
                                        In Progress
                                    </option>

                                    <option>
                                        Resolved
                                    </option>
                                </select>

                                <button
                                    className="btn secondary-btn"
                                    onClick={() =>
                                        deleteIssue(issue.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        ))

                    )}

                </div>

            </section>

        </main>
    );
}

export default Issues;
/* =====================================================
   CIVICFIX JAVASCRIPT
   ===================================================== */


/* =====================================================
   LOCAL STORAGE FUNCTIONS
   ===================================================== */


/*
    Read issues from localStorage.
    If nothing exists, return an empty array.
*/

function getIssues() {

    const storedIssues =
        localStorage.getItem("civicfixIssues");

    if (storedIssues) {

        return JSON.parse(storedIssues);

    }

    return [];

}


/*
    Save issues to localStorage.
*/

function saveIssues(issues) {

    localStorage.setItem(
        "civicfixIssues",
        JSON.stringify(issues)
    );

}


/*
    Read help posts.
*/

function getHelpPosts() {

    const storedPosts =
        localStorage.getItem("civicfixHelpPosts");

    if (storedPosts) {

        return JSON.parse(storedPosts);

    }

    return [];

}


/*
    Save help posts.
*/

function saveHelpPosts(posts) {

    localStorage.setItem(
        "civicfixHelpPosts",
        JSON.stringify(posts)
    );

}


/* =====================================================
   REPORT ISSUE
   ===================================================== */

const issueForm =
    document.getElementById("issueForm");


if (issueForm) {


    issueForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /*
                Get values from form.
            */

            const name =
                document.getElementById("name").value.trim();

            const contact =
                document.getElementById("contact").value.trim();

            const area =
                document.getElementById("area").value.trim();

            const category =
                document.getElementById("category").value;

            const description =
                document
                .getElementById("description")
                .value
                .trim();

            const urgency =
                document.getElementById("urgency").value;

            const date =
                document.getElementById("date").value;


            /*
                Basic validation.
            */

            if (
                name === "" ||
                contact === "" ||
                area === "" ||
                category === "" ||
                description === "" ||
                urgency === "" ||
                date === ""
            ) {

                showMessage(
                    "issueMessage",
                    "Please fill in all fields.",
                    "red"
                );

                return;

            }


            /*
                Create issue object.
            */

            const issue = {

                id: Date.now(),

                name: name,

                contact: contact,

                area: area,

                category: category,

                description: description,

                urgency: urgency,

                date: date,

                status: "Pending"

            };


            /*
                Get existing array.
            */

            const issues = getIssues();


            /*
                Add new object.
            */

            issues.push(issue);


            /*
                Save updated array.
            */

            saveIssues(issues);


            showMessage(
                "issueMessage",
                "Issue reported successfully! ✅",
                "green"
            );


            /*
                Reset form.
            */

            issueForm.reset();

        }
    );

}


/* =====================================================
   DISPLAY ISSUES
   ===================================================== */

const issuesContainer =
    document.getElementById("issuesContainer");


if (issuesContainer) {

    renderIssues();


    const searchBox =
        document.getElementById("issueSearch");

    const statusFilter =
        document.getElementById("statusFilter");

    const urgencyFilter =
        document.getElementById("urgencyFilter");


    searchBox.addEventListener(
        "input",
        renderIssues
    );


    statusFilter.addEventListener(
        "change",
        renderIssues
    );


    urgencyFilter.addEventListener(
        "change",
        renderIssues
    );

}


/*
    Render filtered issues.
*/

function renderIssues() {

    const container =
        document.getElementById("issuesContainer");


    if (!container) {
        return;
    }


    const issues = getIssues();


    const search =
        document
        .getElementById("issueSearch")
        .value
        .toLowerCase();


    const selectedStatus =
        document.getElementById("statusFilter").value;


    const selectedUrgency =
        document.getElementById("urgencyFilter").value;


    /*
        Filter array.
    */

    const filteredIssues =
        issues.filter(function(issue) {

            const matchesSearch =

                issue.name
                .toLowerCase()
                .includes(search)

                ||

                issue.area
                .toLowerCase()
                .includes(search)

                ||

                issue.category
                .toLowerCase()
                .includes(search);


            const matchesStatus =

                selectedStatus === "All"
                ||
                issue.status === selectedStatus;


            const matchesUrgency =

                selectedUrgency === "All"
                ||
                issue.urgency === selectedUrgency;


            return (

                matchesSearch
                &&
                matchesStatus
                &&
                matchesUrgency

            );

        });


    container.innerHTML = "";


    /*
        If no data exists.
    */

    if (filteredIssues.length === 0) {

        container.innerHTML = `

            <div class="issue-card">

                <h3>
                    No issues found
                </h3>

                <p>
                    No complaints match your search
                    or there are no issues yet.
                </p>

            </div>

        `;

        return;

    }


    /*
        Loop through issues.
    */

    filteredIssues.forEach(function(issue) {

        const card =
            document.createElement("div");


        card.className = "issue-card";


        card.innerHTML = `

            <div class="issue-header">

                <div>

                    <h3>
                        ${issue.category}
                    </h3>

                    <p>
                        📍 ${issue.area}
                    </p>

                </div>

                <div>

                    <select
                        class="status-select"
                        onchange="updateIssueStatus(${issue.id}, this.value)"
                    >

                        <option
                            ${issue.status === "Pending" ? "selected" : ""}
                        >
                            Pending
                        </option>

                        <option
                            ${issue.status === "In Progress" ? "selected" : ""}
                        >
                            In Progress
                        </option>

                        <option
                            ${issue.status === "Resolved" ? "selected" : ""}
                        >
                            Resolved
                        </option>

                    </select>


                    <button
                        class="delete-btn"
                        onclick="deleteIssue(${issue.id})">

                        Delete

                    </button>

                </div>

            </div>


            <p>
                ${issue.description}
            </p>


            <div class="issue-meta">

                <span>
                    👤 ${issue.name}
                </span>

                <span>
                    📞 ${issue.contact}
                </span>

                <span>
                    🚨 Priority: ${issue.urgency}
                </span>

                <span>
                    📅 ${issue.date}
                </span>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   UPDATE ISSUE STATUS
   ===================================================== */

function updateIssueStatus(id, newStatus) {

    const issues = getIssues();


    const issue =
        issues.find(function(item) {

            return item.id === id;

        });


    if (issue) {

        issue.status = newStatus;

        saveIssues(issues);

        renderIssues();

    }

}


/* =====================================================
   DELETE ISSUE
   ===================================================== */

function deleteIssue(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this issue?"
        );


    if (!confirmDelete) {
        return;
    }


    let issues = getIssues();


    issues = issues.filter(function(issue) {

        return issue.id !== id;

    });


    saveIssues(issues);


    renderIssues();

}


/* =====================================================
   COMMUNITY HELP
   ===================================================== */

const helpForm =
    document.getElementById("helpForm");


if (helpForm) {


    helpForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("helpName")
                .value
                .trim();


            const contact =
                document
                .getElementById("helpContact")
                .value
                .trim();


            const type =
                document
                .getElementById("helpType")
                .value;


            const category =
                document
                .getElementById("helpCategory")
                .value;


            const area =
                document
                .getElementById("helpArea")
                .value
                .trim();


            const description =
                document
                .getElementById("helpDescription")
                .value
                .trim();


            const date =
                document
                .getElementById("helpDate")
                .value;


            if (

                name === "" ||
                contact === "" ||
                type === "" ||
                category === "" ||
                area === "" ||
                description === "" ||
                date === ""

            ) {

                showMessage(
                    "helpMessage",
                    "Please fill in all fields.",
                    "red"
                );

                return;

            }


            /*
                Create help object.
            */

            const helpPost = {

                id: Date.now(),

                name: name,

                contact: contact,

                type: type,

                category: category,

                description: description,

                area: area,

                date: date

            };


            const posts =
                getHelpPosts();


            posts.push(helpPost);


            saveHelpPosts(posts);


            showMessage(
                "helpMessage",
                "Help post added successfully! 🤝",
                "green"
            );


            helpForm.reset();


            renderHelpPosts();

        }
    );


    renderHelpPosts();

}


/* =====================================================
   DISPLAY HELP POSTS
   ===================================================== */

function renderHelpPosts() {

    const container =
        document.getElementById("helpContainer");


    if (!container) {
        return;
    }


    const posts =
        getHelpPosts();


    container.innerHTML = "";


    if (posts.length === 0) {

        container.innerHTML = `

            <div class="help-card">

                <h3>
                    No help posts yet
                </h3>

                <p>
                    Be the first person to request
                    or offer community support.
                </p>

            </div>

        `;

        return;

    }


    posts.forEach(function(post) {

        const card =
            document.createElement("div");


        card.className = "help-card";


        const typeClass =
            post.type === "Request Help"
            ? "request"
            : "offer";


        card.innerHTML = `

            <span class="help-type ${typeClass}">

                ${post.type}

            </span>


            <h3>
                ${post.category}
            </h3>


            <p>

                ${post.description}

            </p>


            <br>


            <p>

                👤 ${post.name}

            </p>


            <p>

                📍 ${post.area}

            </p>


            <p>

                📅 ${post.date}

            </p>


            <p>

                📞 ${post.contact}

            </p>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   DASHBOARD
   ===================================================== */

function updateDashboard() {

    const issues =
        getIssues();


    const posts =
        getHelpPosts();


    const total =
        issues.length;


    const pending =
        issues.filter(function(issue) {

            return issue.status === "Pending";

        }).length;


    const inProgress =
        issues.filter(function(issue) {

            return issue.status === "In Progress";

        }).length;


    const resolved =
        issues.filter(function(issue) {

            return issue.status === "Resolved";

        }).length;


    const highPriority =
        issues.filter(function(issue) {

            return issue.urgency === "High";

        }).length;


    /*
        Update dashboard numbers.
    */

    setElementText(
        "totalIssues",
        total
    );


    setElementText(
        "pendingIssues",
        pending
    );


    setElementText(
        "resolvedIssues",
        resolved
    );


    setElementText(
        "highIssues",
        highPriority
    );


    setElementText(
        "totalHelp",
        posts.length
    );


    /*
        Calculate percentages.
    */

    let pendingPercentage = 0;

    let progressPercentage = 0;

    let resolvedPercentage = 0;


    if (total > 0) {

        pendingPercentage =
            Math.round(
                (pending / total) * 100
            );


        progressPercentage =
            Math.round(
                (inProgress / total) * 100
            );


        resolvedPercentage =
            Math.round(
                (resolved / total) * 100
            );

    }


    /*
        Update percentage text.
    */

    setElementText(
        "pendingPercent",
        pendingPercentage + "%"
    );


    setElementText(
        "progressPercent",
        progressPercentage + "%"
    );


    setElementText(
        "resolvedPercent",
        resolvedPercentage + "%"
    );


    /*
        Update progress bars.
    */

    setElementWidth(
        "pendingBar",
        pendingPercentage
    );


    setElementWidth(
        "progressBar",
        progressPercentage
    );


    setElementWidth(
        "resolvedBar",
        resolvedPercentage
    );

}


/*
    Run dashboard code
    when dashboard page loads.
*/

if (
    document.getElementById("totalIssues")
) {

    updateDashboard();

}


/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */


function showMessage(
    elementId,
    message,
    color
) {

    const element =
        document.getElementById(elementId);


    if (!element) {
        return;
    }


    element.textContent = message;

    element.style.color = color;

}


/* Change text safely. */

function setElementText(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent = value;

    }

}


/* Change progress-bar width. */

function setElementWidth(
    id,
    percentage
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.style.width =
            percentage + "%";

    }

}
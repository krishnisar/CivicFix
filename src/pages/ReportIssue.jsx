import { useState } from "react";


function ReportIssue() {

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        area: "",
        category: "",
        description: "",
        urgency: "",
        date: ""
    });


    const [message, setMessage] = useState("");


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    function handleSubmit(event) {

        event.preventDefault();


        const issue = {

            id: Date.now(),

            name: formData.name.trim(),

            contact: formData.contact.trim(),

            area: formData.area.trim(),

            category: formData.category,

            description: formData.description.trim(),

            urgency: formData.urgency,

            date: formData.date,

            status: "Pending"

        };


        const existingIssues =
            JSON.parse(
                localStorage.getItem("civicfixIssues")
            ) || [];


        existingIssues.push(issue);


        localStorage.setItem(
            "civicfixIssues",
            JSON.stringify(existingIssues)
        );


        setMessage(
            "Issue reported successfully! ✅"
        );


        setFormData({
            name: "",
            contact: "",
            area: "",
            category: "",
            description: "",
            urgency: "",
            date: ""
        });

    }


    return (

        <main>

            <section className="form-section">

                <div className="page-heading">

                    <p className="small-title">
                        CIVIC ISSUE REPORTING
                    </p>

                    <h1>
                        Report a Community Issue
                    </h1>

                    <p>
                        Provide accurate details so the issue
                        can be recorded and tracked.
                    </p>

                </div>


                <div className="form-container">

                    <form onSubmit={handleSubmit}>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Contact Number
                                </label>

                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="Enter contact number"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Area / Location
                                </label>

                                <input
                                    type="text"
                                    name="area"
                                    placeholder="e.g. Marine Drive"
                                    value={formData.area}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Issue Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select category
                                    </option>

                                    <option value="Garbage">
                                        Garbage / Waste
                                    </option>

                                    <option value="Pothole">
                                        Pothole / Road
                                    </option>

                                    <option value="Water Leakage">
                                        Water Leakage
                                    </option>

                                    <option value="Street Light">
                                        Broken Street Light
                                    </option>

                                    <option value="Sanitation">
                                        Sanitation
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                        </div>


                        <div className="form-group">

                            <label>
                                Issue Description
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                placeholder="Describe the problem..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Urgency
                                </label>

                                <select
                                    name="urgency"
                                    value={formData.urgency}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select urgency
                                    </option>

                                    <option value="Low">
                                        Low
                                    </option>

                                    <option value="Medium">
                                        Medium
                                    </option>

                                    <option value="High">
                                        High
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Date
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="btn primary-btn full-btn"
                        >
                            Submit Issue
                        </button>


                        {message && (
                            <div className="message green">
                                {message}
                            </div>
                        )}

                    </form>

                </div>

            </section>

        </main>
    );
}

export default ReportIssue;
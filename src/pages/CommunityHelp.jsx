import { useEffect, useState } from "react";

function CommunityHelp() {

    const [posts, setPosts] = useState([]);

    const [form, setForm] = useState({
        name: "",
        contact: "",
        type: "",
        category: "",
        description: "",
        area: "",
        date: ""
    });

    useEffect(() => {
        const saved =
            JSON.parse(
                localStorage.getItem("civicfixHelpPosts")
            ) || [];

        setPosts(saved);
    }, []);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const post = {
            id: Date.now(),
            ...form
        };

        const updatedPosts = [
            ...posts,
            post
        ];

        setPosts(updatedPosts);

        localStorage.setItem(
            "civicfixHelpPosts",
            JSON.stringify(updatedPosts)
        );

        setForm({
            name: "",
            contact: "",
            type: "",
            category: "",
            description: "",
            area: "",
            date: ""
        });
    }

    function deletePost(id) {

        const updatedPosts =
            posts.filter(post => post.id !== id);

        setPosts(updatedPosts);

        localStorage.setItem(
            "civicfixHelpPosts",
            JSON.stringify(updatedPosts)
        );
    }

    return (
        <main>

            <section className="section">

                <div className="page-heading">

                    <p className="small-title">
                        COMMUNITY SUPPORT
                    </p>

                    <h1>
                        Community Help Board
                    </h1>

                    <p>
                        Request or offer support within your community.
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
                                    value={form.name}
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
                                    value={form.contact}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Type
                                </label>

                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select type
                                    </option>

                                    <option value="Request Help">
                                        Request Help
                                    </option>

                                    <option value="Offer Help">
                                        Offer Help
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select category
                                    </option>

                                    <option value="Books">
                                        Books
                                    </option>

                                    <option value="Food">
                                        Food
                                    </option>

                                    <option value="Clothing">
                                        Clothing
                                    </option>

                                    <option value="Volunteering">
                                        Volunteering
                                    </option>

                                    <option value="Elderly Assistance">
                                        Elderly Assistance
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                        </div>


                        <div className="form-group">

                            <label>
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                value={form.description}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Area / Location
                                </label>

                                <input
                                    type="text"
                                    name="area"
                                    value={form.area}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Date
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="btn primary-btn full-btn"
                        >
                            Submit Help Post
                        </button>

                    </form>

                </div>

            </section>


            <section className="section">

                <div className="section-heading">

                    <p className="small-title">
                        HELP BOARD
                    </p>

                    <h2>
                        Community Posts
                    </h2>

                </div>


                <div className="issues-grid">

                    {posts.length === 0 ? (

                        <p>
                            No community help posts yet.
                        </p>

                    ) : (

                        posts.map(post => (

                            <div
                                className="issue-card"
                                key={post.id}
                            >

                                <h3>
                                    {post.type}
                                </h3>

                                <p>
                                    <strong>
                                        Category:
                                    </strong>{" "}
                                    {post.category}
                                </p>

                                <p>
                                    {post.description}
                                </p>

                                <p>
                                    <strong>
                                        Area:
                                    </strong>{" "}
                                    {post.area}
                                </p>

                                <p>
                                    <strong>
                                        Date:
                                    </strong>{" "}
                                    {post.date}
                                </p>

                                <button
                                    type="button"
                                    className="btn secondary-btn"
                                    onClick={() =>
                                        deletePost(post.id)
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

export default CommunityHelp;
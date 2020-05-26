import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPosts = ({ h3, fetchAllEntries }) => {
    const url = "http://localhost:8080/securitybackendflaws/api/blogentry/all";

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAllEntries()
            .then((res) => setData(res));
    }, []);

    return (
        <div>
            <h3 style={h3}>All Posts</h3>
            <Table striped hover>

                <thead>
                    <tr>
                        <th style={{ width: "90%" }}>Title</th>
                        <th style={{ width: "10%" }}>Comments</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((entry) => (
                        <tr key={entry.id}>
                            <td>
                                <Link to={location => `/readpost/${entry.id}`}>{entry.title}</Link>
                            </td>
                            <td>{entry.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AllPosts;

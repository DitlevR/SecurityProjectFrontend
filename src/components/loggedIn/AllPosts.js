import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPosts = ({ h3 }) => {
  const url = "http://localhost:8080/securitybackendflaws/api/blogentry/all";

  const [data, setData] = useState({ blogentry: [] });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData({ blogentry: json }));
  }, []);

  return (
    <div>
      <Table striped hover>
        <h3 style={h3}>All Posts</h3>

        <thead>
          <tr>
            <th style={{ width: "90%" }}>Title</th>
            <th style={{ width: "10%" }}>Comments</th>
          </tr>
        </thead>

        <tbody>
          {data.blogentry.map((entry) => (
            <div>
              <tr>
                <td>{entry.title}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllPosts;

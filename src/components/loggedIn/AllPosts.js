import React from 'react';
import { Table } from 'react-bootstrap';

const AllPosts = ({ h3 }) => {

    return (
        <div>
            <h3 style={h3}>All Posts</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th style={{ width: "90%" }}>Title</th>
                        <th style={{ width: "10%" }}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>How to store password securely</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>The best chocolate cake recipe!</td>
                        <td>992</td>
                    </tr>
                    <tr>
                        <td>Should you learn ReactJS in 2020?</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

export default AllPosts;
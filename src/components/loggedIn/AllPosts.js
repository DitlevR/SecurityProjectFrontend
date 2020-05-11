import React from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AllPosts = ({ h3 }) => {

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
                    <tr>
                        <td><Link to="/readpost/1">How to store password securely</Link></td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td><Link>The best chocolate cake recipe!</Link></td>
                        <td>992</td>
                    </tr>
                    <tr>
                        <td><Link>Should you learn ReactJS in 2020?</Link></td>
                        <td>2</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

export default AllPosts;
import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';

const MyPosts = ({ h3 }) => {

    return (
        <div>
            <h3 style={h3}>My Posts</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th style={{ width: "70%" }}>Title</th>
                        <th style={{ width: "15%" }}>Comments</th>
                        <th style={{ width: "15%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>How to store password securely</td>
                        <td>16</td>
                        <td>
                            <ButtonGroup className="mb-2" size="sm">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="warning">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <td>The best chocolate cake recipe!</td>
                        <td>992</td>
                        <td>
                            <ButtonGroup className="mb-2" size="sm">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="warning">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <td>Should you learn ReactJS in 2020?</td>
                        <td>2</td>
                        <td>
                            <ButtonGroup className="mb-2" size="sm">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="warning">Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

export default MyPosts;
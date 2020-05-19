import React from 'react';
import { Table, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = ({ h3 }) => {

    return (
        <div>
            <Form>
                <InputGroup>
                    <FormControl
                        placeholder="eg. how to ..."
                        aria-label="q"
                        aria-describedby="q"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted mb-3">
                    Use the input field to search
                </Form.Text>
            </Form>
            <div>
            <h6 style={h3}>3 results</h6>
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: "60%" }}>Title</th>
                        <th style={{ width: "15%" }}>Comments</th>
                        <th style={{ width: "25%" }}>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="/readpost/1">How to store password securely</Link></td>
                        <td>16</td>
                        <td>Will Smith</td>
                    </tr>
                    <tr>
                        <td><Link>The best chocolate cake recipe!</Link></td>
                        <td>992</td>
                        <td>Martin Lawrence</td>
                    </tr>
                    <tr>
                        <td><Link>Should you learn ReactJS in 2020?</Link></td>
                        <td>2</td>
                        <td>Eddie Murphy</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div >
    )
}

export default Search;
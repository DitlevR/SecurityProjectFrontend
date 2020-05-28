import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
const Login = ({ setLoggedIn, login, setRole }) => {
    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);
    const [user, setUser] = useState({
        "userName": "",
        "password": ""
    });

    useEffect(() => {

        setError(null);
    }, [])

    const handleInput = evt => {
        const target = evt.target;
        user[target.id] = target.value;
        setUser({ ...user });

    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (user.userName === "" || user.password === "") {
            console.log("You must enter a username and a password");
        } else {
            setLoading(true);
            login(user, setRole).then(res => setLoggedIn(true))
                .catch((err) => {
                    err.fullError.then(res => {
                        setError(res.message)
                        setLoading(false);
                    })
                });
        }
    }

    return (
        <Container style={styles.container} fluid>
            <Row style={styles.row}>
                <Col style={styles.col} md={4}>
                    <h5 style={styles.h5}>Use this form to login or create an account</h5>
                    {
                        error ? (
                            <Alert variant="warning">{error}</Alert>
                        ) : null
                    }
                    <Form onChange={handleInput}>
                        <Form.Group controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <>
                            <Button variant="primary" size="lg" onClick={!isLoading ? handleSubmit : null} type="submit" disabled={isLoading} block>
                                {isLoading ? 'Loading…' : 'Log in'}
                            </Button>
                            <center style={{ padding: 10 }}>or</center>
                            <Button variant="success" size="lg" block>
                                Create an account
                            </Button>
                        </>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    container: {
        height: "100vh",
        margin: 0
    },
    row: {
        height: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30,
    },
    col: {
        height: "auto",
        padding: "20px",
        borderRadius: 4,
        border: "1px solid #c1c1c1",
        backgroundColor: "white"
    },
    h5: {
        marginTop: 0,
        paddingBottom: 20,
        color: "#414141",
        fontFamily: "Arial"
    }
}

export default Login;
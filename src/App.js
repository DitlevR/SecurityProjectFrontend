import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import facade from './apiFacade';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import Login from './components/Login';
import CustomNavbar from './components/loggedIn/Navbar';
import Search from './components/loggedIn/Search';
import MyPosts from './components/loggedIn/MyPosts';
import AllPosts from './components/loggedIn/AllPosts';
import ReadPost from './components/loggedIn/ReadPost';

function App() {

    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div>
            <Router>
                {!loggedIn ? (<Redirect to="/login" />) : (<CustomNavbar setLoggedIn={setLoggedIn} />)}

                <Switch>
                    <Route exact path="/login">
                        {loggedIn ? (<Redirect to="/" />) : null}
                        <Login setLoggedIn={setLoggedIn} />
                    </Route>

                    <Route path="/">

                        <Container style={styles.container}>
                            <Row style={styles.row}>
                                <Col style={styles.col} md={8}>

                                    <Route exact path="/">
                                        <center>You've been successfully logged in!</center>
                                    </Route>

                                    <Route exact path="/search">
                                        <Search h3={styles.h3} />
                                    </Route>


                                    <Route exact path="/myposts">
                                        <MyPosts h3={styles.h3} />
                                    </Route>

                                    <Route exact path="/allposts">
                                        <AllPosts fetchAllEntries={facade.fetchAllEntries} h3={styles.h3} />
                                    </Route>

                                    <Route exact path="/readpost/:entryid">
                                        <ReadPost fetchEntryById={facade.fetchEntryById} deleteComment={facade.deleteComment} />
                                    </Route>

                                </Col>
                            </Row>
                        </Container>


                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

const styles = {
    container: {
        marginTop: 40, marginBottom: 40
    },
    row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    col: {
        height: "auto",
        padding: "20px",
        borderRadius: 4,
        border: "1px solid #c1c1c1",
        backgroundColor: "white"
    },
    h3: {
        marginTop: 0,
        color: "#414141",
        fontFamily: "Arial"
    }
}

export default App;

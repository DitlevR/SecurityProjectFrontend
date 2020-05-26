import React, { useEffect, useState, useRef } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Helmet} from 'react-helmet';

const ReadPost = ({ fetchEntryById, deleteComment }) => {
    const match = useRouteMatch();
    const [blogEntry, setBlogEntry] = useState({ user: {}, comments: [] });
    const [commentsAsString, setCommentsAsString] = useState(null);

    useEffect(() => {
        fetchEntryById(match.params.entryid)
            .then(res => {
                if (res.id){
                    setBlogEntry(res);
                    //setCommentsAsString(res.comments.map(comment => comment.content).join(""));
                }
            });
    }, []);

    const deleteCommentHandler = id => {
        deleteComment(id)
        .then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            {
                blogEntry.id ? (
                    <div>
                        <h2>
                            {blogEntry.title}
                        </h2>
                        <span>Written by {blogEntry.user.userName} - {blogEntry.dateOfCreation}</span>
                        <p style={{ marginTop: 20, marginBottom: 20 }}>
                            {blogEntry.content}
                        </p>
                        <hr />
                        <h5>Comments</h5>
                        <ul style={styles.ul}>
                            {
                                blogEntry.comments.map(comment => {
                                    return (
                                        <li key={comment.id} style={styles.comment}>
                                            <p style={styles.commentText} dangerouslySetInnerHTML={{
                                                __html: comment.content
                                                }} />
                                            <hr style={{ marginTop: "10px", marginBottom: "5px" }} />
                                            <small style={styles.commentInfo}>
                                                <div>{comment.user.userName}</div>
                                                <Button variant="danger" size="sm" style={{ fontSize: "12px" }} onClick={() => {deleteCommentHandler(comment.id)}}> Delete</Button>
                                            </small>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                ) : (
                    <div style={{textAlign: "center"}}>The requested blog entry doesn't exist.</div>
                )
            }
        </div>
    )
}


const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0
    },
    comment: {
        borderRadius: 4,
        backgroundColor: "#f1f1f1",
        padding: 10,
        marginTop: 10
    },
    commentInfo: {
        color: "#717171",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    commentText: {
        fontSize: 14,
        margin: 0
    },
    delete: {
        fontWeight: "bold",
        color: "red"
    }
}

export default ReadPost;
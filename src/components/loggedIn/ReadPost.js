import React from 'react';

const ReadPost = () => {

    return (
        <div>
            <h2>
                How to store password securely
            </h2>
            <span>By: John Doe - 11-05-2020</span>
            <p style={{marginTop: 20, marginBottom: 20}}>
                Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.
                Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
                hvor en ukendt trykker sammensatte en tilfældig spalte for
                at trykke en bog til sammenligning af forskellige skrifttyper.
                Lorem Ipsum har ikke alene overlevet fem århundreder,
                men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.
                Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark,
                som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker,
                som også indeholdt en udgave af Lorem Ipsum.
                Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.
                Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
                hvor en ukendt trykker sammensatte en tilfældig spalte for
                at trykke en bog til sammenligning af forskellige skrifttyper.
                Lorem Ipsum har ikke alene overlevet fem århundreder,
                men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.
                Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark,
                som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker,
                som også indeholdt en udgave af Lorem Ipsum.
                Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.
                Lorem Ipsum har været standard fyldtekst siden 1500-tallet,
                hvor en ukendt trykker sammensatte en tilfældig spalte for
                at trykke en bog til sammenligning af forskellige skrifttyper.
                Lorem Ipsum har ikke alene overlevet fem århundreder,
                men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.
                Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark,
                som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker,
                som også indeholdt en udgave af Lorem Ipsum.
            </p>
            <hr/>
            <h5>Comments</h5>
            <ul style={styles.ul}>


                <li style={styles.comment}>
                    <p style={styles.commentText}>
                        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, 
                        når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud. 
                        Hvis du skal bruge en udgave af Lorem Ipsum, skal du sikre dig, 
                        at der ikke indgår noget pinligt midt i teksten. 
                    </p>
                    <small style={styles.commentInfo}>James Cordon - 19-05-2020</small>
                </li>

                <li style={styles.comment}>
                    <p style={styles.commentText}>
                        Great post!
                    </p>
                    <small style={styles.commentInfo}> Tom Smith - 15-05-2020</small>
                </li>

            </ul>
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
    commentInfo:{
        color: "#007bff"
    },
    commentText:{
        margin: 0
    },
}

export default ReadPost;
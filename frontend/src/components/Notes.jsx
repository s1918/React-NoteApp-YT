import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';



function Notes() {
    const[notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
    })


    let {noteNum}  = useParams(); 

    return <div className='container'>
        <h1>Notes</h1>
        {notes.map(note => 
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
            )}

        <h2>This is note number {noteNum}</h2>
    </div>
}

export default Notes;
import React from 'react';
import {useParams} from 'react-router-dom';

function Notes() {

    let {noteNum}  = useParams(); 

    return <div className='container'>
        <h1>Notes</h1>
        <h2>This is note number {noteNum}</h2>
    </div>
}

export default Notes;
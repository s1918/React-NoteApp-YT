import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

function CreateNote() {
    let navigate = useNavigate();

    const [input, setInput] = useState({
        title: '',
        content: '',
    })

    function handleChange (event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input)
    }



    return <div className='container'>
        <h1>Create</h1>
        <form>
            <div class="form-group">
                <input onChange={handleChange} name='title' value={input.title} class="form-control" placeholder="Title"></input>
            </div>
            <div class="form-group">
                <input onChange={handleChange} name='content' value={input.content} class="form-control" placeholder="Content"></input>
            </div>
            <button onClick={handleClick} type="submit" class="btn btn-primary">Add Note</button>
        </form>


        <br></br>
        <button onClick={ () => {
            navigate("/notes")
        }}>
        GO to Notes
        </button>
    </div>
}

export default CreateNote;
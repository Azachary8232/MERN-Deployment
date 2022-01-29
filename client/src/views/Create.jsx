import axios from 'axios';
import React, {useState, useeffect} from 'react';
import {Link, useHistory} from 'react-router-dom'


const Create = (props) => {

        const [name, setName] = useState();
        const [image, setImage] = useState();
        const [chests, setChests] = useState();
        const [phrase, setPhrase] = useState();
        const [position, setPosition] = useState();
        const [peg, setPeg] = useState(true);
        const [eye, setEye] = useState(true);
        const [hook, setHook] = useState(true);
        const history = useHistory();
        const [errors, setErrors] = useState([]); 

        let body = {
            backgroundColor: "gold",
            height: "900px",
            border: "3px solid black"
        }
        let navBar = {
            backgroundColor: "brown",
            border: "3px solid black"
        }

    const createUser = (e) => {
        e.preventDefault();
        axios.post('/api/users/new', {
            name,
            image,
            chests,
            phrase,
            position,
            peg,
            eye,
            hook
        })
        .then(res=>console.log(res.data.user))
        .then( () => history.push("/main"))
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    };

    const handlePeg = () => {
        setPeg(!peg)
    }
    
    const handleEye = () => {
        setEye(!eye)
    }

    const handleHook = () => {
        setHook(!hook)
    }

    return(
        <div className="container">
            <div>
                <div style={navBar}>
                    <h1>Add Pirate</h1>
                    <Link to="/main" className="btn btn-primary" >Crew Board</Link>

                </div>
            </div>
            <div  style={body}>

                <form onSubmit= {createUser}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Pirate Name:</span>
                        <input type="text" onChange={ (e) => setName(e.target.value)}   value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Image Url:</span>
                        <input type="text" onChange={ (e) => setImage(e.target.value)}   value={image} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default"># of Treasure Chests:</span>
                        <input type="number" onChange={ (e) => setChests(e.target.value)}   value={chests} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Pirate Catch Phrase:</span>
                        <input type="text" onChange={ (e) => setPhrase(e.target.value)}   value={phrase} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Pirate Catch Phrase:</span>
                        <select onChange={ (e) => setPosition(e.target.value)} >
                            <option value="">Select Position</option>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Peg Leg:</span>
                        <input checked={peg} type="checkbox" name="" id="" onChange={() => handlePeg() }/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Eye Patch:</span>
                        <input checked={eye} type="checkbox" name="" id="" onChange={() => handleEye() }/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Hook Hand:</span>
                        <input checked={hook} type="checkbox" name="" id="" onChange={() => handleHook() }/>
                    </div>
                    <button className="btn btn-primary">
                            Add Pirate
                    </button> 
                </form>
            </div>


        </div>
    )
}

export default Create;
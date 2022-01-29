import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';



const Show = (props) => {

    const {id} = useParams();
    const [position, setPosition] = useState();
    const [chests, setChests] = useState();
    const [peg, setPeg] = useState();
    const [eye, setEye] = useState();
    const [hook, setHook] = useState();
    const [image, setImage] = useState();
    const [phrase, setPhrase] = useState();
    const [isLoaded, setIsLoaded] = useState(false);


    let body = {
        backgroundColor: "gold",
        height: "900px",
        border: "3px solid black"
    }
    let navBar = {
        backgroundColor: "brown",
        height: "75px",
        border: "3px solid black"
    }
    let about ={
        backgroundColor : "white",
        border : "3px solid black"
    }

    useEffect(() =>{
        axios.get(`/api/users/${id}`)
        .then(res => {
            setPosition(res.data.User.position)
            setImage(res.data.User.image)
            setChests(res.data.User.chests)
            setPhrase(res.data.User.phrase)
            setPeg(res.data.User.peg)
            setHook(res.data.User.hook)
            setEye(res.data.User.eye)
        })
        .then(() => {
            setIsLoaded(true)
        })
        .catch(() => {
            console.log("error")
        });
    },[isLoaded]);

    const updateHook = (id) => {
        setHook(!hook)
        axios.put(`/api/users/update/${id}`,{
            hook : !hook
        })
        .then(() => console.log(!hook))
        .catch("Error")
    }
    const updatePeg = (id) => {
        setPeg(!peg)
        axios.put(`/api/users/update/${id}`,{
            peg : !peg
        })
        .then(() => console.log(!peg))
        .catch("Error")
    }
    const updateEye = (id) => {
        setEye(!eye)
        axios.put(`/api/users/update/${id}`,{
            eye : !eye
        })
        .then(() => console.log(!eye))
        .catch("Error")
    }

    return(
        <div className="container">
        <div style={navBar}>
            <h1>Deep Sea Davy</h1>
        </div>
        {isLoaded ?
        <div className="p-5" style={body}>
            <div>
                <img src={image} alt="Image of Pirate" />
            </div>
            <div>
                <h1>{phrase}</h1>
            </div>
            <div className="p-3" style={about}>
                <h2>About</h2>
                <p>Position:  {position}</p>
                <p>Treasures:  {chests}</p>
                <p>{peg ? "Peg Leg: Yes" : "Peg Leg: No"}</p>
                <button onClick={() => updatePeg(id)} className={peg? "btn btn-success" : "btn btn-danger"}>{peg ? "Yes" : "No"}</button>
                <p>{eye ? "Eye Patch: Yes" : "Eye Patch: No"}</p>
                <button onClick={() => updateEye(id)} className={eye? "btn btn-success" : "btn btn-danger"}>{eye ? "Yes" : "No"}</button>
                <p>{hook ? "Hook Hand: Yes" : "Hook Hand: No"}</p>
                <button onClick={() => updateHook(id)} className={hook? "btn btn-success" : "btn btn-danger"}>{hook ? "Yes" : "No"}</button>
            </div>
        </div>
        :
        <div>
            <h1>Is Loading.......</h1>
        </div>
        }

    </div>


    )




}

export default Show;
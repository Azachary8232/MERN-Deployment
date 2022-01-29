import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Main = (props) => {

    const [users, setUsers] = useState([])

    let body = {
        backgroundColor: "gold",
        height: "500px",
        border: "3px solid black",
        overflow: "auto"
    }
    let navBar = {
        backgroundColor: "brown",
        border: "3px solid black"
    }
    let pirateItem = {
        backgroundColor: "white",
        border: "3px solid black"
    }

    useEffect(() =>{
        axios.get('/api/users/')
        .then(res => {
            setUsers(res.data.users);
        })
        .catch(() => {
            console.log("success")
        });
    },[setUsers]);

    const deleteUser = (userId) => {
        console.log(userId);
        axios.delete(`/api/users/delete/${userId}`)
            .then(res => {
                setUsers(users.filter(user => user._id !== userId));
            })
    }

    return(
        <div className="container my-5">
            <div style={navBar}>
                <h1>Pirate Crew</h1>
                <Link to="/create" className="btn btn-primary">Add Pirate</Link>
            </div>
            <div className="p-5" style={body}>
            {users.map( (user, idx) =>
                <div className="pb-3" style={pirateItem} key={idx}>
                    <h3>{user.name}</h3>
                    <img src={user.image} alt={user.image} />
                    <Link to={`/show/${user._id}`} className="btn btn-primary">View Pirate</Link>
                    <button onClick={() => deleteUser(user._id)} className="btn btn-danger mx-3">Walk the Plank</button>
                </div>
                )}
            </div>


        </div>
        

    )

}

export default Main;    
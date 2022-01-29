import axios from 'axios';
import React, {useState, useEffect}from 'react';



const Table = (props) => {

    // const [authors, setAuthors] = useState([])

    // const removeFromDom = authorId => {
    //     setAuthors(authors.filter(author => author._id !== authorId));
    // }


    // useEffect(() =>{
    //     axios.get('http://localHost:8000/api/authors/')
    //     .then(res => {
    //         setAuthors(res.data.authors);
    //     })
    //     .catch(() => {
    //         console.log("success")
    //     });
    // });

    // const deleteAuthor = (authorId) => {
    //     axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
    //         .then(res => {
    //             props.removeFromDom(authorId)
    //         })
    // }

    return(
        <div className='container p-5'>
                <h1>Table Page</h1>
            {/* <Link to={`/create`}>Add an author</Link>
            <h4>We have quotes by:</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td>{props.tableListData.authorData}</td>
                        <td>{props.tableListData.actionData}</td>
                    </tr>
                </thead>
                <tbody>
                    {props.tableListData.authorsList.map( (author, idx) =>
                    <tr key={idx}>
                        <td>{author.name}</td>
                        <td><Link to={`/update/${author._id}`} className="btn btn-primary">Edit</Link> | <button onClick={(e)=>{deleteAuthor(author._id)}} className="btn btn-danger">Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table> */}
        </div>

    )

}
export default Table;
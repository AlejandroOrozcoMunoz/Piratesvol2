import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AllPirates = () => {

    const [pirates, setPirates] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));

}, [])

const deletePirate = id => {
    axios.delete("http://localhost:8000/api/piratas/"+id)
        .then(res => {
            //Actualizar ls lita de autores por medio de filter
            let nuevaLista = pirates.filter(pirata => pirata._id !== id);
            setPirates(nuevaLista);
        })
}

return (
    <div className="container">
        <h1>Pirate Crew</h1>
        <Link to="/new" className="btn btn-success">Add Pirate</Link>
        <table className="table table-hover">
            
        <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        pirates.map((pirata, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={pirata.image} alt="pirata" className="img-fluid"/>
                                </td>
                                <td>
                                    {pirata.name}
                                
                                </td>
                                <td>
                                <div className="btn-group ">
                                        <Link className="btn btn-primary" to={`/pirate/view/${pirata._id}`}>View Pirate</Link>
                                        <Link className="btn btn-warning" to={`/pirate/edit/${pirata._id}`}>Edit</Link>
                                        <button className="btn btn-danger btn-xs" onClick={() => deletePirate(pirata._id)}>Walk the Plank</button>
                                    </div>
                                </td>
                                </tr>
                        ))
                        
                    }
                    </tbody>
                </table>
            </div>
        )                               
}
export default AllPirates;
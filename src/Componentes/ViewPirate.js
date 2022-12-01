import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ViewPirate = () => {
    const {id} = useParams();
    const [pirates, setPirates] = useState({});

    

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                setPirates(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);


    return(
        <div className="container">
            <div className="card-header">
                <h1>{pirates.name}</h1></div>
            <div className="row">
                <div className="col-6">
                    <img src={pirates.image} alt="pirata" className="img-fluid" />
                    <h2>
                    "{pirates.catchPhrase}" 
                    </h2>
                </div>
                <div className="col-6" >
                    <h2>About</h2>
                    <p>
                        Crew Position: {pirates.crewPosition}
                    </p>
                    <p>
                        Treasures: {pirates.treasureChests}
                    </p>
                    <p>Peg Leg{
                            pirates.peg_leg ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                        
                    
                    
                    <p>Eye Patch {
                            pirates.eye_patch ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                    
                    <p>Hook Hand {
                            pirates.hook_hand ?  <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                        
                    <Link to="/" className="btn btn-primary">Crew Board</Link>
                </div>  
            </div>

            
        </div>
    )

}

export default ViewPirate;
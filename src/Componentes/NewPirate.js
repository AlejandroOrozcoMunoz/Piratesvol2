import React, {useState} from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const NewPirate = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasureChests, setTreasureChests] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [peg_leg, setPeg_leg] = useState(true);
    const [eye_patch, setEye_patch] = useState(true);
    const [hook_hand, setHook_hand] = useState(true);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const savePirate = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/piratas", {
            name,
            image,
            treasureChests,
            catchPhrase,
            crewPosition,
            peg_leg,
            eye_patch,
            hook_hand

        })
        .then(res => history.push("/"))
        .catch(err => {console.log(err.response.data);
            setErrors(err.response.data.errors)
        })
        
}
    return (
        <div className="container">
            <h1>Add Pirate</h1>
            <Link to="/" className="btn btn-primary">Crew Board</Link>
            <form onSubmit={savePirate}>
                <div className="form-group">
                    <label htmlFor="name">Pirate Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL de Imagen:</label>
                    <input type="text" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
                    {errors.image ? <span className="text-danger">{errors.image.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="treasureChests">Treasure Chests:</label>
                    <input type="number" id="treasureChests" name="treasureChests" value={treasureChests} onChange={e => setTreasureChests(e.target.value)} className="form-control" />
                    {errors.treasureChests ? <span className="text-danger">{errors.treasureChests.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="catchPhrase">Catch Phrase:</label>
                    <input type="text" id="catchPhrase" name="catchPhrase" value={catchPhrase} onChange={e => setCatchPhrase(e.target.value)} className="form-control" />
                    {errors.catchPhrase ? <span className="text-danger">{errors.catchPhrase.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="crewPosition">Crew Position:</label>
                    <select type="text" id="crewPosition" name="crewPosition" value={crewPosition} onChange={e => setCrewPosition(e.target.value)} className="form-control">
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monker">Powder Monkey</option>
                    </select>
                    {errors.crewPosition ? <span className="text-danger">{errors.crewPosition.message}</span>: null}
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="peg_leg" name="peg_leg" checked={peg_leg} onChange={e => setPeg_leg(e.target.checked)} />
                    <label className="form-check-label" htmlFor="peg_leg">
                        Peg Leg
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="eye_patch" name="eye_patch" checked={eye_patch} onChange={e => setEye_patch(e.target.checked)} />
                    <label className="form-check-label" htmlFor="eye_patch">
                        Eye Patch
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="hook_hand" name="hook_hand" checked={hook_hand} onChange={e => setHook_hand(e.target.checked)} />
                    <label className="form-check-label" htmlFor="hook_hand">
                        Hook Hand
                    </label>
                    
                </div>
                <input type="submit" className="btn btn-success" value="Add Pirate" />
            </form>
        </div>
    )  











}
export default NewPirate;
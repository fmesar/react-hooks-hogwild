import react, {useState} from "react";

const Hog = ({hog}) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
    setClicked(!clicked)
    }
    return(
        <div onClick={handleClick} 
        className ="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.specialty}></img>
            {clicked ?<p>Specialty: {hog.specialty} </p> : null}
            {clicked ?<p>Greased: {hog.greased ? "true" : "false"} </p> : null}
            {clicked ?<p>Weight: {hog.weight} </p> : null}
            {/* {clicked ?<p>Highest Medal Achieved: {hog[highest medal achieved] ? "true" : "false"} </p> : null} */}

        </div>
    )
}

export default Hog; 
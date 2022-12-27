import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../App"

function CharacterDetails({fetchCharacters, handleDelete}){
    const {character, setCharacters} = useContext(AppContext)
    const[currentChar, setCurrentChar]=useState([])
    const navigate=useNavigate()
    function deleteThisChar(){
            handleDelete(character)
        }

        function playGame(){
            if (character.savepoint === 0){
                navigate("/page1")
            } else{
                /*placeholder:*/alert(`savepoint is at ${character.savepoint}`)
                //navigate(`/page4{character.savepoint}`)
            }
        }




    console.log(character)
    return(
        <AppContext.Provider value={{character, handleDelete}}>
        <div>
            <h1>{character.name}</h1>
            <ul>
                <li>Health: {character.health}</li>
                <li>Strength: {character.strength}</li>
                <li>Defense: {character.defense}</li>
                <li>Intelligence: {character.intelligence}</li>
                <li>Current Savepoint: {character.savepoint}</li>
            </ul>
            <button onClick={deleteThisChar}>Delete</button>
            <button onClick={playGame}>Play</button>
        </div>
        </AppContext.Provider>
    )
}

export default CharacterDetails
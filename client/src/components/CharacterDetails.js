import { useContext } from "react"
import { AppContext } from "../App"

function CharacterDetails({fetchCharacters, handleDelete}){
    const {character, setCharacters} = useContext(AppContext)

    function deleteThisChar(){
            handleDelete(character)
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
        </div>
        </AppContext.Provider>
    )
}

export default CharacterDetails
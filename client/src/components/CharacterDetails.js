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
            <button onClick={deleteThisChar}>Delete</button>
        </div>
        </AppContext.Provider>
    )
}

export default CharacterDetails
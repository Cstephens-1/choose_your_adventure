import { useContext, useState } from "react"
import { AppContext } from "../App"

function CharacterCreate(){
//characters need: name, save, def, str, health, int, user_id

    const{currentUser} =useContext(AppContext)
    const [characterName, setCharacterName] = useState('')
    const [totalStatsAvailable, setTotalStatsAvailable] = useState(25)
    const [health, setHealth] = useState(0)
    const [str, setStr] = useState(0)
    const [def, setDef] = useState(0)
    const [int, setInt] = useState(0)
    const [characters, setCharacters] = useState([])
    console.log(characterName)


    function fetchCharacters(){
        fetch("http://localhost:3000/characters")
        .then(resp=> resp.json())
        .then(char=> setCharacters(char))
    }

    function createCharacter(e){
        e.preventDefault()
        const newCharacter = {
            name: characterName,
            save: 0,
            health: health,
            str: str,
            def: def,
            int: int,
            user_id: currentUser.id
        };
        fetch("http://localhost:3000/characters", {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newCharacter)})
            .then(resp=> resp.json())
            .then(charFromDatabase=> fetchCharacters())
    }


         
console.log("these are the characters", characters)


    function incrementHealth(e){
        e.preventDefault()
        setHealth(health+ 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementHealth(e){
        e.preventDefault()
        setHealth(health -1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    function incrementStr(e){
        e.preventDefault()
        setStr(str + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementStr(e){
        e.preventDefault()
        setStr(str - 1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    function incrementDef(e){
        e.preventDefault()
        setDef(def + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementDef(e){
        e.preventDefault()
        setDef(def - 1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    function incrementInt(e){
        e.preventDefault()
        setInt(int + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementInt(e){
        e.preventDefault()
        setInt(int - 1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    return(
        <>
            <h1>this is char creation</h1>
                <h5>Total points available: {totalStatsAvailable}</h5>
            <form onSubmit={createCharacter}>
                <label> Character Name: </label>
                    <input type="text" placeholder="Enter a name" onChange={(e) => setCharacterName(e.target.value)}  />
                    <div>
                        <label>Health: </label>
                        <button onClick={incrementHealth}>+</button>{health}<button onClick={decrementHealth}>-</button>
                    </div>
                    <div>
                        <label>Strength: </label>
                        <button onClick={incrementStr}>+</button>{str}<button onClick={decrementStr}>-</button>
                    </div>
                    <div>
                        <label>Defense: </label>
                        <button onClick={incrementDef}>+</button>{def}<button onClick={decrementDef}>-</button>
                    </div>
                    <div>
                        <label>Intelligence: </label>
                        <button onClick={incrementInt}>+</button>{int}<button onClick={decrementInt}>-</button>
                    </div> 
                    <button>Create Character</button>
            </form>
        </>
    )
}

export default CharacterCreate
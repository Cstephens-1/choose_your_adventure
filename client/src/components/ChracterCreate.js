import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../App"

function CharacterCreate(){

    const{currentUser} =useContext(AppContext)
    const [characterName, setCharacterName] = useState('')
    const [totalStatsAvailable, setTotalStatsAvailable] = useState(25)
    const [health, setHealth] = useState(0)
    const [strength, setStr] = useState(0)
    const [defense, setDef] = useState(0)
    const [intelligence, setInt] = useState(0)
    const [characters, setCharacters] = useState([])

    function fetchCharacters(){
        fetch("http://localhost:3000/characters")
        .then(resp=> resp.json())
        .then(char=> setCharacters(char))
    }

    const navigate = useNavigate()

    function createCharacter(e){
        e.preventDefault()
        const newCharacter = {
            name: characterName,
            savepoint: 0,
            health: health,
            strength: strength,
            defense: defense,
            intelligence: intelligence,
            user_id: currentUser.id
        };
        fetch("http://localhost:3000/characters", {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newCharacter)})
            .then(resp=> resp.json())
            .then(charFromDB=>  {
                setCharacters([...characters, charFromDB],
                    fetchCharacters())
                    navigate("/mypage")
})
    }



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
        setStr(strength + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementStr(e){
        e.preventDefault()
        setStr(strength - 1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    function incrementDef(e){
        e.preventDefault()
        setDef(defense + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementDef(e){
        e.preventDefault()
        setDef(defense - 1)
        setTotalStatsAvailable(totalStatsAvailable + 1)
    }

    function incrementInt(e){
        e.preventDefault()
        setInt(intelligence + 1)
        setTotalStatsAvailable(totalStatsAvailable - 1)
    }

    function decrementInt(e){
        e.preventDefault()
        setInt(intelligence - 1)
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
                        <button onClick={incrementStr}>+</button>{strength}<button onClick={decrementStr}>-</button>
                    </div>
                    <div>
                        <label>Defense: </label>
                        <button onClick={incrementDef}>+</button>{defense}<button onClick={decrementDef}>-</button>
                    </div>
                    <div>
                        <label>Intelligence: </label>
                        <button onClick={incrementInt}>+</button>{intelligence}<button onClick={decrementInt}>-</button>
                    </div> 
                    <button>Create Character</button>
            </form>
        </>
    )
}

export default CharacterCreate
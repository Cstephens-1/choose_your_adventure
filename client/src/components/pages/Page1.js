import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Page1(){

const location = useLocation()
let navigate = useNavigate()

    let character=location.state
    console.log("this is character in pg1", character)
    // const[currentChar, setCurrentChar] = useState("")
    function updateSavePoint(){
        fetch(`http://localhost:3000/characters/${character.character.id}`, {
            method: "PATCH", 
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({savepoint: 1})
            })
            .then(resp=> resp.json())
            .then(updatedSavePoint  => {
                console.log(updatedSavePoint)
                navigate("/mypage")
            })
        // console.log(`this is the update save function for ${character.character.name}`)
        }
    


    return((
        <>
            <p>this is the song that never ends....</p>
            <button>Option 1</button>
            <button>Option 2</button>
            <button onClick={updateSavePoint}>Save current progress</button>
        </>
    ))
}

export default Page1
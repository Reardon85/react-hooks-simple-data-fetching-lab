import React, {useState, useEffect} from "react";


const App = () => {

    const [image, setImage] = useState(null)

    useEffect(() => {

        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((data) => {
            setImage(data.message)
        }) 

    }, [])

    console.log(image)
    return (
        <>
        {image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>
        }
        </>
    )





}



export default App



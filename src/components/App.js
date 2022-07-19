// create your App component here
// create your App component here
import React,{useState,useEffect} from 'react'

const App = () => {
    const [value, imageValue] = useState([]);
    const [isLoaded, setIsLoad] = useState(false);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {                
                imageValue(data.message)
                setIsLoad(true);
                
            });
    }, []);

  // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) {
        return <p>Loading...</p>
    }
    return <img alt='A Random Dog' src={value}></img>
}

export default App
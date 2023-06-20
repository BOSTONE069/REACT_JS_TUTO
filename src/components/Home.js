import { useState } from 'react';
const Home = () => {
    //let country = "Kenya";
    const [country, setCountry] = useState("Kenya");
    const [age, setAge] = useState(40);

    const handleClick = () =>{
        console.log("Hello Bostone Welcome to React JS")
    }

    const handleClickAgain = (name) =>{
        console.log("Hello Welcome to React JS Again" +  name);
    }

    const changeCountry = () =>{
        setCountry("India");
    }

    const changeAge = () =>{
            setAge(25);
        }


    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{country}</p>
            <button onClick={changeCountry}>Change Country</button>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain("Bostone");
            }}>Click Me Again</button>

            <p>Age: {age}</p>
            <button onClick={changeAge}>Change Age</button>
        </div>
    );
}
export default Home;
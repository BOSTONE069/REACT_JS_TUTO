import { useState } from 'react';
const Home = () => {
    //let country = "Kenya";
    const [country, setCountry] = useState("Kenya");
    const [age, setAge] = useState(40);

    const handleClick = () =>{
        console.log("Hello Bostone Welcome to React JS")
    }

    /**
     * The function logs a greeting message with a given name parameter.
     * @param name - a parameter of type string that represents the name of the person being greeted in
     * the console log message.
     */
    const handleClickAgain = (name) =>{
        console.log("Hello Welcome to React JS Again" +  name);
    }

    /**
     * The function changes the country to India.
     */
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
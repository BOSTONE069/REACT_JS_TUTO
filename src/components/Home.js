const Home = () => {
    const handleClick = () =>{
        console.log("Hello Bostone Welcome to React JS")
    }

    const handleClickAgain = (name) =>{
        console.log("Hello Welcome to React JS Again" +  name);
    }


    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain("Bostone");
            }}>Click Me Again</button>
        </div>
    );
}
export default Home;
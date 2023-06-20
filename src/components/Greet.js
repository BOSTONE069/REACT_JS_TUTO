import React from 'react';

// function Greeting(){
//     return(
//             <div>
//                 <h1>Hello</h1>
//             </div>
//         );
// }
/**
 * The above code defines a functional component called Greeting that returns a div containing a
 * heading with the text "Hello".
 * @returns A React functional component named `Greeting` is being returned. It renders a `div` element
 * containing an `h1` element with the text "Hello".
 */
const Greeting = () => {
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <h1>Hello These are the Blogs That I have Written</h1>
        </div>
    );
}
export default Greeting;
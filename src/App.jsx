import React from "react";
import Feedback from "./components/Home/Feedback.jsx";
import Submitted from "./components/Home/Submitted.jsx";
import Button from "./components/Button.jsx";

const App = () => {
    const main = React.useRef();
    const contents = { Feedback, Submitted };
    const [content, setContent] = React.useState("Feedback");
    const [rating, setRating] = React.useState(null);

    React.useEffect(() => main.current.classList.add("show"), []);

    return (
        <main className="card" 
        ref={main}>
            <h1>
                Um desafio de uma avaliação interativa. Utilizado React com JSX, componentes e Hooks!
            </h1>

            {React.createElement(contents[content], {
                main, 
                rating,
                setRating
            })}

            <Button hooks={{ main, content, setContent, rating, setRating }} />
        </main>
    )
}

export default App;
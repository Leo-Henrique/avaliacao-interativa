import React from "react";
import Feedback from "./components/Home/Feedback.jsx"
import Submitted from "./components/Home/Submitted.jsx"

const App = () => {
    const content = React.useState("feedback");
    const rating = React.useState(null);
    const hooks = {content, rating};

    if (content[0] === "feedback") 
        return <Feedback hooks={hooks} />
    else
        return <Submitted hooks={hooks} />;
}

export default App;

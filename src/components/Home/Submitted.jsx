import React from "react";
import illustration from "../../assets/illustration-thank-you.svg"
import Title from "../Title.jsx"

const Submitted = ( { main: {current:  main }, rating} ) => {
    React.useEffect(() => {
        main.classList.add("submitted");

        return () => main.classList.remove("submitted");
    }, [])

    return (
        <>
            <div className="illustration">
                <img src={illustration} 
                alt="Ilustração representando o recebimento do feedback" />
            </div>

            <mark className="user-rating">
                Você selecionou {rating} de 5
            </mark>

            <Title text="Obrigado!" />

            <p>
                Agradecemos por dedicar seu tempo para avaliar. Se você precisar de mais suporte, não hesite em entrar em contato!
            </p>
        </>
    )
}

export default Submitted;
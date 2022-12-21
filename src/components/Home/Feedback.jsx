import React from "react";
import starIcon from "../../assets/icon-star.svg"
import Title from "../Title.jsx"
import Paragraph from "../Paragraph.jsx"
import Rating from "../Rating.jsx"
import Button from "../Button.jsx"

const Feedback = ({ hooks }) => {
    const setContent = hooks.content[1];
    const [rating, setRating] = hooks.rating;

    return (
        <main className="card">
            <h1>
                Um desafio de uma avaliação interativa. Utilizado React com JSX, componentes e Hooks!
            </h1>

            <div className="star">
                <img src={starIcon} 
                alt=""
                aria-hidden="true" />
            </div>

            <Title text="Como fizemos?" />

            <Paragraph text="Por favor, deixe-nos saber como fizemos com o seu pedido de suporte. Todos os comentários são apreciados para nos ajudar a melhorar nossa oferta!" />

            <Rating total={5} setRating={setRating} />

            <Button text="Enviar" 
            callback={() => setContent("submitted")}
            disabled={!rating ? true : false} />
        </main>
    )
}

export default Feedback;
import React from "react";
import starIcon from "../../assets/icon-star.svg"
import Title from "../Title.jsx"
import Rating from "../Rating.jsx"

const Feedback = ({ setRating }) => {
    return (
        <>
            <div className="star">
                <img src={starIcon} 
                alt=""
                aria-hidden="true" />
            </div>

            <Title text="Como fizemos?" />

            <p>
                Por favor, deixe-nos saber como fizemos com o seu pedido de suporte. Todos os comentários são apreciados para nos ajudar a melhorar nossa oferta!
            </p>

            <Rating total={5} setRating={setRating} />
        </>
    )
}

export default Feedback;
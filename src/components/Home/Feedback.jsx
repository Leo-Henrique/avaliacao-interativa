import starIcon from "../../assets/icon-star.svg"
import Title from "../Title.jsx"
import Paragraph from "../Paragraph.jsx"
import Rating from "../Rating.jsx"
import Button from "../Button.jsx"

const Feedback = () => {
    return (
        <>
            <h1>
                Um desafio de uma avaliação interativa. Utilizado React com JSX, componentes e Hooks!
            </h1>

            <div className="star">
                <img src={starIcon} 
                alt="Ícone de uma estrela representando avaliações" />
            </div>

            <Title text="Como fizemos?" />

            <Paragraph text="Por favor, deixe-nos saber como fizemos com o seu pedido de suporte. Todos os comentários são apreciados para nos ajudar a melhorar nossa oferta!" />

            <Rating total={5} />

            <Button text="Enviar" />
        </>
    )
}

export default Feedback;
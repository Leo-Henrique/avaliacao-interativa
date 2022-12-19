import illustration from "../../assets/illustration-thank-you.svg"
import Title from "../Title.jsx"
import Paragraph from "../Paragraph.jsx"
import Button from "../Button.jsx"

const Submitted = () => {
    return (
        <>
            <h1>
                Um desafio de uma avaliação interativa. Utilizado React com JSX, componentes e Hooks!
            </h1>

            <mark>
                Você selecionou 0 de 5
            </mark>

            <div>
                <img src={illustration} 
                alt="Ilustração representando o recebimento do feedback por nós" />
            </div>

            <Title text="Obrigado"
            align="center" />

            <Paragraph text="Agradecemos por dedicar seu tempo para avaliar. Se você precisar de mais suporte, não hesite em entrar em contato!" />

            <Button text="Voltar" />
        </>
    )
}

export default Submitted;
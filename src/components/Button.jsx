const Button = ({ hooks: {main, content, setContent, rating, setRating} }) => {
    const handleClick = ({ target }) => {
        const changeContent = () => {
            if (content === "Feedback") {
                setContent("Submitted");
                target.innerText = "Voltar";
            } else {
                setContent("Feedback");
                target.innerText = "Enviar";
                setRating(null);
            }
        }

        (() => {
            const { current } = main;
            const transition = "data-transition";
            const { milliseconds } = {
                get string() {return getComputedStyle(current).transitionDuration} ,
                get seconds() {return +this.string.slice(0, -1)},
                get milliseconds() {return this.seconds * 1000}
            }

            if (!current.hasAttribute(transition)) {
                current.setAttribute(transition, "");
                current.classList.remove("show");
                setTimeout(changeContent, milliseconds);
                setTimeout(() => current.classList.add("show"), milliseconds * 2);
                setTimeout(() => current.removeAttribute(transition), milliseconds * 3);
            }
        })();
    }

    return (
        <button onClick={handleClick}
        disabled={!rating ? true : false}>
            Enviar
        </button>
    );
}

export default Button;
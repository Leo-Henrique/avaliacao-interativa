const Button = ({text, callback, disabled}) => {
    return (
        <button onClick={callback}
        disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;
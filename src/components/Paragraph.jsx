const Paragraph = ({ text, align }) => {
    return (
        <p style={{ textAlign: align }}>
            {text}
        </p>
    )
}

export default Paragraph;
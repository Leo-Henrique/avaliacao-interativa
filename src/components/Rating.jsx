const Rating = ({ total, setRating }) => {
    const amount = () => {
        let array = [];
        for (let li = 1; li <= total; li++) {
            array.push(li);
        }

        return array;
    }
    const selectRating = ({ target }) => {
        const list = target.parentElement.parentElement;
        const itens = list.querySelectorAll("button");
        const submit = list.nextElementSibling;

        itens.forEach(item => item.classList.remove("active"));
        target.classList.add("active");
        setRating(target.innerText);
    }

    return (
        <ul className="rating">
            {amount().map(number => {
                return (
                    <li key={number}>
                        <button onClick={selectRating}>{number}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Rating;
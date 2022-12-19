const Rating = ({ total }) => {
    const amount = () => {
        let array = [];
        for (let li = 1; li <= total; li++) {
            array.push(li);
        }

        return array;
    }
    return (
        <ul>
            {amount().map(number => {
                return (
                    <li key={number}>
                        <button>{number}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Rating;
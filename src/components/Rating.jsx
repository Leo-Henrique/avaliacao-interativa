import React from "react";

const Rating = ({ total, setRating }) => {
    const list = React.useRef();
    const amount = () => {
        let array = [];
        for (let li = 1; li <= total; li++) {
            array.push(li);
        }

        return array;
    }
    const selectRating = ({ target }) => {
        const allBtns = list.current.querySelectorAll("button");

        allBtns.forEach(item => item.classList.remove("active"));
        target.classList.add("active");
        setRating(target.innerText);
    }

    return (
        <ul className="rating" ref={list}>
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
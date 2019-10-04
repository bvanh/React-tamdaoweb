import React from 'react';


export default function FilterRating(props) {
    const filterRating = [];
    for (let i = 1; i <= 5; i++) {
        filterRating.push(
            <label className="form-check" key={i}>
                <input className="form-check-input"
                    type="checkbox"
                    name={i}
                    onChange={props.filterRate}
                />
                <span className="form-check-label">
                    {i} sao
               </span>
            </label>
        )
    }
    return (
        <form>
            {filterRating}
        </form>
    )
}
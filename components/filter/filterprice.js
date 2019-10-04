import React from 'react';


export default function FilterPrice(props) {
    const printFilter = []
    for (let i = 500000; i <= 3000000; i+=500000) {
        printFilter.push(
            <label className="form-check">
                <input className="form-check-input" type="checkbox"
                name={i}
                onChange={props.filterPrice}
                />
                <span className="form-check-label">
                    Từ {i.toLocaleString()} vnđ
</span>
            </label>
        )
    }
    return (
        <form>
            {printFilter}
        </form>
    )
}
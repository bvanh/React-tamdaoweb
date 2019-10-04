export default function Rating(props) {
    const {value}=props
    let rater = [];
    for (let i = 0; i < value; i++) {
        rater.push(<i key={i} class="fa fa-star"></i>)
    }
    return rater;
}
import './Transaction.css';
import PropTypes from 'prop-types'; // ES6
import './Item.css'

// รูปแบบมาตรฐานที่นิยมใช้กัน
const Item =(props) => {

    const {title, amount} = props

    const status = amount < 0 ? "expense" : "income"

    const symbol = amount < 0 ? "-" : "+"

    return (
        <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span></li>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

// หรือจะเขียนแบบนี้ก็ได้เช่นกัน
// const Item =({title, amount}) => {

//     return (
//         <li>{title} <span> {amount}</span></li>
//     );
// }

export default Item;
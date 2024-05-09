
import dp from './assets/dp.jpg'
import PropTypes from 'prop-types'
function Card(props) {
    return (
        <div className="card">
            <img className='card-img' src={dp} alt="Profile pic" />
            <h2 className='card-title'>Name: {props.name}</h2>
            <p className='card-text'>Age : {props.age} </p>
            <p className='card-text'>Student : {props.isStudent ? "yes" : "No"}</p>
        </div>
    );
}
Card.prototype = {
    name: PropTypes.String,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Card.defaultProps = {
    isStudent: false,
    name: 'Guest',
    age: 0,

}
export default Card
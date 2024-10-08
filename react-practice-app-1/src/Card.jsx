
import Button from './Button/Button.jsx'

function Card(props){

    return(
        <div className="card">
        <img className='card-image' src={props.src} alt="DP of card" />
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.text}</p>
            <Button />
        </div>
    );
}
export default Card
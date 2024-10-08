import cardDP from './assets/butterfly150.jpg'
import Button from './Button/Button.jsx'

function Card(){

    return(
        <div className="card">
        <img className='card-image' src={cardDP} alt="DP of card" />
        <h2 className='card-title'>Card Title</h2>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus cumque magnam illo recusandae eveniet velit excepturi iste quae ipsam tempore </p>
            <Button />
        </div>
    );
}
export default Card
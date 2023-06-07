import style from './card.module.css';

const Card = ({src, alt, color, name, text}) => {
    return(
    <div className={`${style.container}`}>
        <div className={`${style.card} ${style.color}`}>
            <img src={src} alt={alt} />
            <h2 className={`${style.h1}`}>{name}</h2>
            <p className={`${style.p}`}>{text}</p>
            <button className={`${style.button} ${style.color}`}>Learn More</button>
        </div>
    </div>
    );
    
}
export default Card;
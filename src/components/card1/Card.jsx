import style from './card.module.css'

const Card = () => {
    return(
    <div className={`${style.container}`}>
        <div className={`${style.card} ${style.orange}`}>
            <img src="/images/icon-sedans.svg" alt="imagen 1" />
            <h2 className={`${style.h1}`}>SEDANS</h2>
            <p className={`${style.p}`}>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className={`${style.button} ${style.buttonorange}`}>Learn More</button>
        </div>
        <div className={`${style.card} ${style.blue}`}>
            <img src="/images/icon-suvs.svg" alt="imagen 2" />
            <h2 className={`${style.h1}`}>SUVS</h2>
            <p className={`${style.p}`}>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures..</p>
            <button className={`${style.button} ${style.buttonblue}`}>Learn More</button>
        </div>
        <div className={`${style.card} ${style.green}`}>
            <img src="/images/icon-luxury.svg" alt="imagen 3" />
            <h2 className={`${style.h1}`}>LUXURY</h2>
            <p className={`${style.p}`}>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
            <button className={`${style.button} ${style.buttongreen}`}>Learn More</button>
        </div>
    </div>
    );
    
}
export default Card;
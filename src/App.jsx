import Card from "./components/card1/Card";
import { CARDS } from './constants/cards';


const App = () => {
	return (
		<>
		<div className="container">
		{
		CARDS.map(card=>(
		<Card
		key={card.id}
		src={card.src}
		alt={card.alt}
		color={card.color}
		name={card.name}
		text={card.text}
		/>
		))}
		</div>
		</>
	);
};

export default App;

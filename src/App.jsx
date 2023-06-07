import Card from "./components/card1/Card";
import { CARDS } from './constants/cards';


const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;

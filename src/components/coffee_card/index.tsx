import { Container, Value, Counter } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/coffee_context";
import { redirect, useNavigate } from "react-router-dom";

export interface CoffeeCardProps {
    id: string;
    name: string;
    picture: string;
    tags: string[];
    description: string;
    price: number;
}

export function CoffeeCard({
    id,
    name,
    picture,
    tags,
    description,
    price
}: CoffeeCardProps) {
    
    const { addCoffeToCart } = useContext(CoffeeContext);
    const navigate = useNavigate();

    const [counter, setCounter] = useState(1);

    const picuteSrc = `/src/assets/${picture}`;
    const pricelInReal = (price || 0).toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });

    function handleOnDecreaseAmountClicked() {
        if (counter == 1) return;
        setCounter(counter - 1);
    }

    function handleOnIncreaseAmountClicked() {
        setCounter(counter + 1);
    }

    function handleAddCoffeeToCartClicked() {
        addCoffeToCart(id, counter);
        setCounter(1);
        navigate("/cart");
    }

    return (
        <Container>
            <header>
                <img src={picuteSrc} />
                { tags.map(tag => (<span key={tag}>{tag}</span>))}
                <h1>{name}</h1>
            </header>
            <p>
                {description}
            </p>
            <footer>
                <Value>
                    <span>R$</span>
                    <span>{pricelInReal}</span>    
                </Value>
                <div>
                    <Counter>
                        <button onClick={handleOnDecreaseAmountClicked}>
                            <Minus weight="fill" />
                        </button>
                        <span>{counter}</span>
                        <button onClick={handleOnIncreaseAmountClicked}>
                            <Plus weight="fill" />
                        </button>
                    </Counter>
                    <button onClick={handleAddCoffeeToCartClicked}>
                        <ShoppingCart weight="fill" />
                    </button>
                </div>
            </footer>
        </Container>
    );
}
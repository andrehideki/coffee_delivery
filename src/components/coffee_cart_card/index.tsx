import { Container, Value, Counter } from "./styles";
import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/coffee_context";

export interface CoffeeCartCardProps {
    id: string;
    name: string;
    picture: string;
    amount: number;
    price: number;
}

export function CoffeeCartCard({
    id,
    name,
    picture,
    amount,
    price
}: CoffeeCartCardProps) {
    
    const { addCoffeToCart, decreaseCoffefromCart } = useContext(CoffeeContext);

    const [counter, setCounter] = useState(amount);

    console.log(amount);

    const picuteSrc = `/src/assets/${picture}`;
    const pricelInReal = (price || 0).toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });

    function handleOnDecreaseAmountClicked() {
        const decreasedCounter = counter - 1;
        setCounter(decreasedCounter);
        decreaseCoffefromCart(id, 1);
    }

    function handleOnIncreaseAmountClicked() {
        const increasedCounter = counter + 1;
        setCounter(increasedCounter);
        addCoffeToCart(id, 1);
    }

    function handleRemoveClicked() {
        addCoffeToCart(id, counter);
        setCounter(1);
    }

    return (
        <Container>
            <img src={picuteSrc} />
            <div>
                <span>{name}</span>
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
                    <button onClick={handleRemoveClicked}>
                        <Trash />   
                        REMOVER
                    </button>
                </div>  
            </div>
            <Value>
                <span>R${pricelInReal}</span>    
            </Value>
        </Container>
    );
}
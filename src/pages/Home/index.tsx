import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import homeCoffee from "./../../assets/home_coffee.svg";
import { IntroContainer, Title, InfoContainer, InfoShopping, InfoPackage, InfoTimer, InfoCoffee, CoffeeList, Backgound } from "./styles";
import background from "../../assets/background.svg";
import { CoffeeCard } from "../../components/coffee_card";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/coffee_context";

export function HomePage() {
    const { coffeeList } = useContext(CoffeeContext);
    return (
        <div>
            <Backgound src={background}></Backgound>
            <IntroContainer>
                <div>
                    <Title>Encontre o café perfeito<br/>para qualquer hora do dia</Title>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br/>qualquer hora</p>
                    <InfoContainer>
                        <InfoShopping>
                            <div>
                                <ShoppingCart weight="fill" />
                            </div>
                            Compra simples e segura
                        </InfoShopping>
                        <InfoPackage>
                            <div>
                                <Package size={32} weight="fill" /> 
                            </div>
                            Embalagem mantém o café intacto
                        </InfoPackage>
                        <InfoTimer>
                            <div>
                                <Timer size={32} weight="fill" />
                            </div>
                            Entrega rápida e rastreada
                        </InfoTimer>
                        <InfoCoffee>
                            <div>
                                <Coffee size={32} weight="fill" />
                            </div>
                            O café chega fresquinho até você
                        </InfoCoffee>
                    </InfoContainer>
                </div>
                <img src={homeCoffee}></img>
            </IntroContainer>
            <CoffeeList>
                <h1>Nossos cafés</h1>
                <div>
                    { coffeeList.map(coffee => 
                        <CoffeeCard 
                            key={coffee.id}
                            id={coffee.id}
                            description={coffee.description}
                            name={coffee.name}
                            picture={coffee.picture}
                            price={coffee.price}
                            tags={coffee.tags}
                        />
                    )}                    
                </div>
            </CoffeeList>
        </div>
    );
}
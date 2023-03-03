import React, { useContext } from "react";
import { Cart, HeaderContainer, Location } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../contexts/coffee_context";

export function Header() {
    const {cart} = useContext(CoffeeContext);

    const numberOfCartItems = cart.items.map(item => item.amount).reduce((a, b) => a + b, 0);
    const isCartEmpty = numberOfCartItems <= 0;

    return (
        <HeaderContainer>
            <Link to={"/"}>
                <img src={logo}/>
            </Link>
            <div>
                <Location>
                    <Link to={isCartEmpty? "/" : "/cart"}>
                        <MapPin size={32} weight="fill" />
                        <span>Porto Alegre, RS</span>
                    </Link>
                </Location>
                <Cart>
                    <Link to={isCartEmpty? "/" : "/cart"}>
                        <span>{numberOfCartItems}</span>
                        <ShoppingCart size={32} weight="fill" />
                    </Link>
                </Cart>
            </div>
        </HeaderContainer>
    );
}